# Automating your iOS App Development Workflow: Continuous Deployment with GitHub Actions

In agile software development, continuous deployment is key to collect user feedback leading to more reliable and successful iOS apps. Still, deploying to AppStore Connect is challenging due to managing signing certificates, provisioning profiles, and build numbers. In this article, we'll explore how to automate this process, allowing you to release your apps with a single button press.

## Environment Variables

First, we need to configure the following environment variables in your project's settings (`Project` > `Settings` > `Security` > `Secrets and Environment Variables` > `actions`):

| Key                     | Value (Example)   |
|-------------------------|-------------------|
| APP_ID                  | 1234567           |
| TEAM_ID                 | A123456789        |
| BUNDLE_ID               | com.example.app   |
| SIMULATOR_DEVICE_TYPE   | iPhone-14         |
| SIMULATOR_RUNTIME       | iOS-16-2          |

Explanation:
- `APP_ID`: The identifier that uniquely identifies the application.
  - Location: AppStore Connect > Apps > App > App Information > Apple ID
- `TEAM_ID`: The identifier for the team enrolled in the Apple Developer Program.
  - Location: AppStore Connect > Edit Profile > TeamID
- `BUNDLE_ID`: The identifier used by Apple to uniquely identify the application.
  - Location: AppStore Connect > Apps > App > App Information > Bundle Identifier
- `SIMULATOR_DEVICE_TYPE`: The simulator device used to run tests in the workflow.
- `SIMULATOR_RUNTIME`: The Runtime version of the iOS simulator.

## Secrets

Next, we create the following secrets in the project's settings:

| Key                            | Value (Example)      |
|--------------------------------|----------------------|
| API_KEY_BASE64       	         | XXXXXXXXXX           |
| API_KEY_ID                     | XXXXXXXXXX           |
| API_KEY_ISSUER_ID              | XXXXXXXXXX           |
| KEYCHAIN_PASSWORD              | XXXXXXXXXX           |
| SIGNING_CERTIFICATE_BASE64     | XXXXXXXXXX           |
| SIGNING_CERTIFICATE_PASSWORD   | XXXXXXXXXX           |
| PROVISIONING_PROFILE_BASE64    | XXXXXXXXXX           |

Github secrets store sensitive information in the project's repository and provide them as encrypted environment variables to the workflows, ensuring that their values are hidden from the web interface and can only be updated, not seen, once stored.

Explanation:
- `API_KEY_BASE64`: The private key to authorize against the AppStore Connect API encoded in base64 format.
- `API_KEY_ID`: The key's Id.
  - Location: App Store Connect > Users and Access > Keys
- `API_KEY_ISSUER_ID`: The identifier of the issuer who created the authentication token.
  - Location: App Store Connect > Users and Access > Keys > Issuer Id
- `KEYCHAIN_PASSWORD`: The password used to unlock the keychain.
- `SIGNING_CERTIFICATE_BASE64`: The signing certificate encoded in base64 format.
- `SIGNING_CERTIFICATE_PASSWORD`: The password for your Apple signing certificate.
- `PROVISIONING_PROFILE_BASE64`: The provisioning profile encoded in base64 format.

You can use the following command to encode the

```sh
openssl base64 -in ./AuthKey_XXXXXXXX.p8 | pbcopy
```

## Deployment Workflow

Now that we automated test execution, we can focus on the automatic deployment to AppStore Connect. This way, we can distribute the application to TestFlight and get feedback from internal- and external testers.

Similar to test execution we start with a similar blueprint:

```yml
name: Deploy to App Store Connect

on:
  workflow_dispatch:

jobs:
  archive-and-deploy:
    runs-on: macos-latest

    steps:
        ...
```

Note that only the manual trigger via the web interface is included to better control when deployment is made. Still, it is possible to enable automatic deployment whenever the `main` branch is updated:

```yaml
on:
  push:
    branches:
      - main
```

###  Step 1: Checkout Repository

First, we use the same step to gain access to the source code:

```yaml
- name: Checkout repository
  uses: actions/checkout@v3
```

### Step 2: Install App Store Connect API Key 

Next, we need to install the private key to the agent such that it can communicate with AppStore Connect:

```sh
mkdir ~/.private_keys
echo -n "$API_KEY_BASE64" | base64 --decode --output ~/.private_AuthKey_${{ secrets.API_KEY_ID }}.p8
echo "After saving:"
ls ~/.private_keys
```

The API Key is decoded from the base64-encoded Secret and stored in the current directory.

### Step 3: Install Signing Certificate

Next, the signing certificate is decoded and stored in a new keychain that is created on the agent. Note that we need to unlock the keychain to be accessed when archiving the application:

```sh
SIGNING_CERTIFICATE_PATH=$RUNNER_TEMP/signing_certificate.p12
KEYCHAIN_PATH=$RUNNER_TEMP/app-signing.keychain-db

# Read Signing Certificate
echo -n "$SIGNING_CERTIFICATE_BASE64" | base64 --decode -o "$SIGNING_CERTIFICATE_PATH"

# Create Keychain
security create-keychain -p "$KEYCHAIN_PASSWORD" "$KEYCHAIN_PATH"
security set-keychain-settings -lut 21600 "$KEYCHAIN_PATH"
security unlock-keychain -p "$KEYCHAIN_PASSWORD" "$KEYCHAIN_PATH"

# Import Signing Certificate to Keychain
security import "$SIGNING_CERTIFICATE_PATH" -P "$SIGNING_CERTIFICATE_PASSWORD" -A -t cert -f pkcs12 -k "$KEYCHAIN_PATH"
security list-keychain -d user -s "$KEYCHAIN_PATH"
```

### Step 4: Install Provisioning Profile

Finally, the provising profile is stored in the agent's library directory:
- `~/Library/MobileDevice/Provisioning\ Profiles`

```sh
PROVISIONING_PROFILE_PATH=$RUNNER_TEMP/provisioning_profile.mobileprovision

# Read Provisioning Profile
echo -n "$PROVISIONING_PROFILE_BASE64" | base64 --decode -o "$PROVISIONING_PROFILE_PATH"

# Import Provisioning Profile
mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
cp $PROVISIONING_PROFILE_PATH ~/Library/MobileDevice/Provisioning\ Profiles
```

### Step 5: Inject Build Number

Each build that is submitted to AppStore Connect needs to have a build number that is greater than the maximum known build number of all builds ever submitted. Since manually keeping track of build numbers is tedious, we utitlize the pipelines built-in counter, i.e., `github.run_number` that is incremented on every build. This way, we only need to specify the marketing version that is shown in the AppStore:  

```sh
buildNumber=${{ github.run_number }}
echo "Current build number: $buildNumber"
agvtool new-version -all $buildNumber
```

### Step 6: Inject `TEAM_ID`, `BUNDLE_ID` and `PROVISIONING_PROFILE_NAME` into `exportOptions.plist`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>method</key>
    <string>app-store</string>
    <key>teamID</key>
    <string>{{TEAM_ID}}</string>
    <key>uploadSymbols</key>
    <true/>
    <key>signingStyle</key>
    <string>manual</string>
    <key>provisioningProfiles</key>
    <dict>
        <key>{{BUNDLE_ID}}</key>
        <string>{{PROVISIONING_PROFILE_NAME}}</string>
    </dict>
</dict>
</plist>
```

```sh
- name: Configure exportOptions.plist
  env: 
    TEAM_ID: ${{ vars.TEAM_ID }}
    BUNDLE_ID: ${{ vars.BUNDLE_ID }}
    PROVISIONING_PROFILE_NAME: ${{ vars.PROVISIONING_PROFILE_NAME }}
  run: |
    sed -i '' "s/{{TEAM_ID}}/$TEAM_ID/g" exportOptions.plist
    sed -i '' "s/{{BUNDLE_ID}}/$BUNDLE_ID/g" exportOptions.plist
    sed -i '' "s/{{PROVISIONING_PROFILE_NAME}}/$PROVISIONING_PROFILE_NAME/g" exportOptions.plist
```

### Step 7: Build, Sign and Archive

Having setup the environment, we can archive the application as an `xcarchive`. Note that we are using manual code signing with the provising profile that we imported in an earlier step: 

```sh
set -o pipefail && xcodebuild clean archive \
  -scheme "App" \
  -archivePath $RUNNER_TEMP/App.xcarchive \
  -sdk iphoneos \
  -configuration Release \
  -destination generic/platform=iOS \
  CODE_SIGN_STYLE=Manual \
  PROVISIONING_PROFILE_SPECIFIER=Distribution | xcpretty
```

### Step 8: Export Archive

As soon as the archive is available, we can export the iOS AppStore Package (`.ipa`) considering our export options.

```sh
ARTIFACT_FILEPATH=$RUNNER_TEMP/App.ipa
set -o pipefail && xcodebuild -exportArchive \
  -archivePath $RUNNER_TEMP/App.xcarchive \
  -exportOptionsPlist exportOptions.plist \
  -exportPath $RUNNER_TEMP | xcpretty
```

### Step 9: Publish Archive

```yaml
- name: Publish App.ipa file
  uses: actions/upload-artifact@v3
  with:
    name: App.ipa
    path: ${{ runner.temp }}/App.ipa
```

### Step 10: Validate Build Artifact

```sh
xcrun altool --validate-app \
  -f ${{ runner.temp }}/App.ipa \
  -t ios \
  --apiKey ${{ secrets.API_KEY_ID }} \
  --apiIssuer ${{ secrets.API_KEY_ISSUER_ID }}
```

### Step 11: Upload Build Artifact to AppStore Connect

```sh
xcrun altool --upload-app \
  -f ${{ runner.temp }}/App.ipa \
  -t ios \
  --apiKey ${{ secrets.API_KEY_ID }} \
  --apiIssuer ${{ secrets.API_KEY_ISSUER_ID }}
```

### Step 12: Cleanup keychain and provisioning profile

```sh
security delete-keychain $RUNNER_TEMP/app-signing.keychain-db
rm ~/Library/MobileDevice/Provisioning\ Profiles/provisioning_profile.mobileprovision
```

### Deploy to AppStore Connect Workflow

Finally, we obtain the following worklow that is stored as `deploy.yml` in the `.github/workflows` directory:

```yml
name: Deploy to AppStore Connect

on:
  workflow_dispatch:

jobs:
  archive-and-deploy:
    runs-on: macos-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Install App Store Connect Api Key
        env:
          API_KEY_BASE64: ${{ secrets.API_KEY_BASE64 }}
        run: |
          mkdir ~/.private_keys
          echo -n "$API_KEY_BASE64" | base64 --decode --output ~/.private_keys/AuthKey_${{ secrets.API_KEY_ID }}.p8
          echo "After saving:"
          ls ~/.private_keys

      - name: Install Signing Certificate
        env:
          SIGNING_CERTIFICATE_BASE64: ${{ secrets.SIGNING_CERTIFICATE_BASE64 }}
          SIGNING_CERTIFICATE_PASSWORD: ${{ secrets.SIGNING_CERTIFICATE_PASSWORD }}
          KEYCHAIN_PASSWORD: ${{ secrets.KEYCHAIN_PASSWORD }}
        run: |
          SIGNING_CERTIFICATE_PATH=$RUNNER_TEMP/signing_certificate.p12
          KEYCHAIN_PATH=$RUNNER_TEMP/app-signing.keychain-db

          # Read Signing Certificate
          echo -n "$SIGNING_CERTIFICATE_BASE64" | base64 --decode -o "$SIGNING_CERTIFICATE_PATH"

          # Create Keychain
          security create-keychain -p "$KEYCHAIN_PASSWORD" "$KEYCHAIN_PATH"
          security set-keychain-settings -lut 21600 "$KEYCHAIN_PATH"
          security unlock-keychain -p "$KEYCHAIN_PASSWORD" "$KEYCHAIN_PATH"

          # Import Signing Certificate to Keychain
          security import "$SIGNING_CERTIFICATE_PATH" -P "$SIGNING_CERTIFICATE_PASSWORD" -A -t cert -f pkcs12 -k "$KEYCHAIN_PATH"
          security list-keychain -d user -s "$KEYCHAIN_PATH"

      - name: Install Provisioning Profile
        env:
          PROVISIONING_PROFILE_BASE64: ${{ secrets.PROVISIONING_PROFILE_BASE64 }}
        run: |
          PROVISIONING_PROFILE_PATH=$RUNNER_TEMP/provisioning_profile.mobileprovision

          # Read Provisioning Profile
          echo -n "$PROVISIONING_PROFILE_BASE64" | base64 --decode -o "$PROVISIONING_PROFILE_PATH"

          # Import Provisioning Profile
          mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
          cp $PROVISIONING_PROFILE_PATH ~/Library/MobileDevice/Provisioning\ Profiles

      - name: Inject Build Number
        run: |
          buildNumber=${{ github.run_number }}
          echo "Current build number: $buildNumber"
          agvtool new-version -all $buildNumber
          sed -i "" "s/CFBundleVersion/$buildNumber/" exportOptions.plist

      - name: Configure exportOptions.plist
        env: 
          TEAM_ID: ${{ vars.TEAM_ID }}
          BUNDLE_ID: ${{ vars.BUNDLE_ID }}
          PROVISIONING_PROFILE_NAME: ${{ vars.PROVISIONING_PROFILE_NAME }}
        run: |
          sed -i '' "s/{{TEAM_ID}}/$TEAM_ID/g" exportOptions.plist
          sed -i '' "s/{{BUNDLE_ID}}/$BUNDLE_ID/g" exportOptions.plist
          sed -i '' "s/{{PROVISIONING_PROFILE_NAME}}/$PROVISIONING_PROFILE_NAME/g" exportOptions.plist

      - name: Build, Sign and Archive
        run: |
          set -o pipefail && xcodebuild clean archive \
            -scheme "App" \
            -archivePath $RUNNER_TEMP/App.xcarchive \
            -sdk iphoneos \
            -configuration Release \
            -destination generic/platform=iOS \
            CODE_SIGN_STYLE=Manual \
            PROVISIONING_PROFILE_SPECIFIER=Distribution | xcpretty

      - name: Export archive
        run: |
          ARTIFACT_FILEPATH=$RUNNER_TEMP/App.ipa
          set -o pipefail && xcodebuild -exportArchive \
            -archivePath $RUNNER_TEMP/App.xcarchive \
            -exportOptionsPlist exportOptions.plist \
            -exportPath $RUNNER_TEMP | xcpretty

      - name: Publish App.ipa file
        uses: actions/upload-artifact@v3
        with:
          name: App.ipa
          path: ${{ runner.temp }}/App.ipa
      
      - name: Validate Build Artifact
        run: |
          xcrun altool --validate-app \
            -f ${{ runner.temp }}/App.ipa \
            -t ios \
            --apiKey ${{ secrets.API_KEY_ID }} \
            --apiIssuer ${{ secrets.API_KEY_ISSUER_ID }}

      - name: Upload Build Artifact to TestFlight
        run: |
          xcrun altool --upload-app \
            -f ${{ runner.temp }}/App.ipa \
            -t ios \
            --apiKey ${{ secrets.API_KEY_ID }} \
            --apiIssuer ${{ secrets.API_KEY_ISSUER_ID }}

      - name: Clean up keychain and provisioning profile
        if: ${{ always() }}
        run: |
          security delete-keychain $RUNNER_TEMP/app-signing.keychain-db
          rm ~/Library/MobileDevice/Provisioning\ Profiles/provisioning_profile.mobileprovision
```

# References:

- [Sign Xcode Applications](https://docs.github.com/en/actions/deployment/deploying-xcode-applications/installing-an-apple-certificate-on-macos-runners-for-xcode-development) - Github
- [iOS CI/CD Worklfow using Github Actions](https://www.cobeisfresh.com/blog/how-to-implement-a-ci-cd-workflow-for-ios-using-github-actions) - cobeisfresh

Happy Coding 🚀