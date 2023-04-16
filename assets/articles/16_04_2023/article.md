# Automating your iOS App Development Workflow: Continuous Deployment with GitHub Actions

In agile software development, continuous deployment is key to collect user feedback leading to more reliable and successful iOS apps. Still, deploying to AppStore Connect is challenging due to managing signing certificates, provisioning profiles, and build numbers. In this article, we'll explore how to automate this process, allowing you to release your apps with a single button press.

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
SIGNING_CERTIFICATE_PATH=$RUNNER_TEMP/build_certificate.p12
KEYCHAIN_PATH=$RUNNER_TEMP/app-signing.keychain-db

# Read Signing Certificate
echo -n "$BUILD_CERTIFICATE_BASE64" | base64 --decode -o "$SIGNING_CERTIFICATE_PATH"

# Create Keychain
security create-keychain -p "$KEYCHAIN_PASSWORD" "$KEYCHAIN_PATH"
security set-keychain-settings -lut 21600 "$KEYCHAIN_PATH"
security unlock-keychain -p "$KEYCHAIN_PASSWORD" "$KEYCHAIN_PATH"

# Import Signing Certificate to Keychain
security import "$SIGNING_CERTIFICATE_PATH" -P "$P12_PASSWORD" -A -t cert -f pkcs12 -k "$KEYCHAIN_PATH"
security list-keychain -d user -s "$KEYCHAIN_PATH"
```

### Step 4: Install Provisioning Profile

Finally, the provising profile is stored in the agent's library directory:
- `~/Library/MobileDevice/Provisioning\ Profiles`

```sh
PROVISIONING_PROFILE_PATH=$RUNNER_TEMP/build_provisioning_profile.mobileprovision

# Read Provisioning Profile
echo -n "$BUILD_PROVISION_PROFILE_BASE64" | base64 --decode -o "$PROVISIONING_PROFILE_PATH"

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
sed -i "" "s/CFBundleVersion/$buildNumber/" exportOptions.plist
```

### Step 6: Build, Sign and Archive

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

### Step 7: Export Archive

As soon as the archive is available, we can export the iOS AppStore Package (`.ipa`) considering our export options.

```sh
ARTIFACT_FILEPATH=$RUNNER_TEMP/App.ipa
set -o pipefail && xcodebuild -exportArchive \
  -archivePath $RUNNER_TEMP/App.xcarchive \
  -exportOptionsPlist exportOptions.plist \
  -exportPath $RUNNER_TEMP | xcpretty
```

### Step 8: Publish Archive

```yaml
- name: Publish App.ipa file
  uses: actions/upload-artifact@v3
  with:
    name: App.ipa
    path: ${{ runner.temp }}/App.ipa
```

### Step 9: Validate Build Artifact

```sh
xcrun altool --validate-app \
  -f ${{ runner.temp }}/App.ipa \
  -t ios \
  --apiKey ${{ secrets.API_KEY_ID }} \
  --apiIssuer ${{ secrets.API_KEY_ISSUER_ID }}
```

### Step 10: Upload Build Artifact to AppStore Connect

```sh
xcrun altool --upload-app \
  -f ${{ runner.temp }}/App.ipa \
  -t ios \
  --apiKey ${{ secrets.API_KEY_ID }} \
  --apiIssuer ${{ secrets.API_KEY_ISSUER_ID }}
```

### Step 11: Cleanup keychain and provisioning profile

```sh
security delete-keychain $RUNNER_TEMP/app-signing.keychain-db
rm ~/Library/MobileDevice/Provisioning\ Profiles/build_provisioning_profile.mobileprovision
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
          BUILD_CERTIFICATE_BASE64: ${{ secrets.BUILD_CERTIFICATE_BASE64 }}
          P12_PASSWORD: ${{ secrets.P12_PASSWORD }}
          KEYCHAIN_PASSWORD: ${{ secrets.KEYCHAIN_PASSWORD }}
        run: |
          SIGNING_CERTIFICATE_PATH=$RUNNER_TEMP/build_certificate.p12
          KEYCHAIN_PATH=$RUNNER_TEMP/app-signing.keychain-db

          # Read Signing Certificate
          echo -n "$BUILD_CERTIFICATE_BASE64" | base64 --decode -o "$SIGNING_CERTIFICATE_PATH"

          # Create Keychain
          security create-keychain -p "$KEYCHAIN_PASSWORD" "$KEYCHAIN_PATH"
          security set-keychain-settings -lut 21600 "$KEYCHAIN_PATH"
          security unlock-keychain -p "$KEYCHAIN_PASSWORD" "$KEYCHAIN_PATH"

          # Import Signing Certificate to Keychain
          security import "$SIGNING_CERTIFICATE_PATH" -P "$P12_PASSWORD" -A -t cert -f pkcs12 -k "$KEYCHAIN_PATH"
          security list-keychain -d user -s "$KEYCHAIN_PATH"

      - name: Install Provisioning Profile
        env:
          BUILD_PROVISION_PROFILE_BASE64: ${{ secrets.BUILD_PROVISION_PROFILE_BASE64 }}
        run: |
          PROVISIONING_PROFILE_PATH=$RUNNER_TEMP/build_provisioning_profile.mobileprovision

          # Read Provisioning Profile
          echo -n "$BUILD_PROVISION_PROFILE_BASE64" | base64 --decode -o "$PROVISIONING_PROFILE_PATH"

          # Import Provisioning Profile
          mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
          cp $PROVISIONING_PROFILE_PATH ~/Library/MobileDevice/Provisioning\ Profiles

      - name: Inject Build Number
        run: |
          buildNumber=${{ github.run_number }}
          echo "Current build number: $buildNumber"
          agvtool new-version -all $buildNumber
          sed -i "" "s/CFBundleVersion/$buildNumber/" exportOptions.plist

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
          rm ~/Library/MobileDevice/Provisioning\ Profiles/build_provisioning_profile.mobileprovision
```