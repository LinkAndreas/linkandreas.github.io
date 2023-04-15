import article1 from "../../assets/articles/09_03_2021/article.md";
import article2 from "../../assets/articles/16_03_2022/article.md";
import article3 from "../../assets/articles/13_11_2022/article.md";

const articles = [
    {
        id: '09_03_2021',
        date: '9th of March 2021',
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
    },
    {
        id: '16_03_2022',
        date: '16th of March 2022',
        markdown: article2,
        title: 'AsyncResourceView - Simplified Resource Loading',
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
        id: '13_11_2022',
        date: '13th of November 2022',
        markdown: article3,
        title: 'Story Numbers in Commit Messages - Leveraging the power of Git Hooks',
        description: `Especially in large software projects with many developers involved,
        it is best practice to include the story number from the ticket system
        like Jira or Azure DevOps in every commit. This will let you refer to
        the original requirements quickly and see how the team thought about the
        feature, bug fix or release when it was developed. Still, manually adding
        the number to every commit is cumbersome. Hence, today, we will learn how
        to automatically derive the story number from the branch name and automate
        that procedure using Git Commit Hooks.`
    }
];

export { articles };