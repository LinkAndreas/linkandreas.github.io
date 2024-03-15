import article6 from "./articles/15_03_2024.md";
import article5 from "./articles/17_04_2023.md";
import article4 from "./articles/10_04_2023.md";
import article3 from "./articles/13_11_2022.md";
import article2 from "./articles/16_03_2022.md";
import article1 from "./articles/09_03_2021.md";
import rfc822Date from "rfc822-date";

const articles = [
    {
        id: '2024-03-15',
        date: rfc822Date(new Date('2024-03-15')),
        markdown: article6,
        title: 'Networking in large-scale iOS Applications',
        description: `Networking serves as the backbone of mobile applications, 
            facilitating seamless communication and enabling rich user experiences. 
            However, it also introduces complexity, especially when dealing with 
            modular applications that are built from independent features.
            Modularity offers many benefits, such as a faster development cycle 
            and better scalability. But it also requires a robust approach to handle 
            cross-cutting concerns among features. Since networking is a 
            cross-cutting concern, it cannot be easily encapsulated in any of them.
            In this article, we explore a lightweight approach to deal with 
            networking in modular iOS applications.`
    },
    {
        id: '2023-04-17',
        date: rfc822Date(new Date('2023-04-17')),
        markdown: article5,
        title: 'Automating your iOS App Development Workflow: Continuous Deployment with GitHub Actions',
        description: `In agile software development, continuous deployment is key to collect 
            user feedback leading to more reliable and successful iOS apps. Still, deploying to 
            AppStore Connect is challenging due to managing signing certificates, provisioning profiles, 
            and build numbers. In this article, we'll explore how to automate this process, allowing 
            you to release your apps with a single button press.`
    },
    {
        id: '2023-04-10',
        date: rfc822Date(new Date('2023-04-10')),
        markdown: article4,
        title: 'Automating your iOS App Development Workflow: Continuous Testing with GitHub Actions',
        description: `Are you striving to iterate quickly to deliver new features,
            all while ensuring the reliability and performance of your iOS application? 
            Efficient workflows are key to achieving this goal. In this article, we'll explore 
            how we can leverage the power of GitHub Actions to automate testing as part of the 
            continuous integration process for iOS applications.`
    },
    {
        id: '2022-11-13',
        date: rfc822Date(new Date('2022-11-13')),
        markdown: article3,
        title: 'Story Numbers in Commit Messages: Leveraging the power of Git Hooks',
        description: `Especially in large software projects with many developers involved,
            it is best practice to include the story number from the ticket system
            like Jira or Azure DevOps in every commit. This will let you refer to
            the original requirements quickly and see how the team thought about the
            feature, bug fix or release when it was developed. Still, manually adding
            the number to every commit is cumbersome. Hence, today, we will learn how
            to automatically derive the story number from the branch name and automate
            that procedure using Git Commit Hooks.`
    },
    {
        id: '2022-03-16',
        date: rfc822Date(new Date('2022-03-16')),
        markdown: article2,
        title: 'AsyncResourceView: Simplified Resource Loading',
        description: `Modern apps heavily rely on resources that are received
            over the network, and hence may be affected by connectivity issues
            or data loss. If, for example, you travel by train within Germany,
            you may be surprised how often you will experience radio gaps or
            interruptions due to weak cellular reception. Hence, we as developers
            have to design our apps to include feedback when an action takes longer
            than expected and offer the ability to retry the action in case that
            it failed. This way, we can make our apps stand out, since they can
            cope with conditions that are far from optimal.
    
            AsyncResourceView offers a consistent way to deal with loading as well as
            error states in SwiftUI applications. This way, developers can focus on
            features rather than writing repetitive error-prone code.`
    },
    {
        id: '2021-03-09',
        date: rfc822Date(new Date(`2021-03-09`)),
        markdown: article1,
        title: 'Building a native macOS app using SwiftUI and Combine',
        description: `Have you ever been asked to put together the list of licenses 
            of all frameworks that are used within your iOS, iPad OS, or
            macOS app? Manually completing this task quickly becomes
            tedious but may be required due to legal- or customer
            requests.
    
            To mitigate this issue, I developed Licenses, a native macOS
            app that automates this procedure by collecting and exporting
            your licenses into a single spreadsheet (CSV) file.`
    }
];

export { articles }