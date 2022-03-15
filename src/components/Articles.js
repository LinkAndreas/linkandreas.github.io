import React from "react";
import Article from "./Article.js";
import ArticleItem from "./ArticleItem.js";
import { Routes, Route } from "react-router-dom";
import "../styles/Articles.css";

export default function Articles() {
  return (
    <div className="articlesContainer">
      <Routes>
        <Route path="" element={
          <div>
            <ArticleItem
              id="15_03_2022"
              date="15th of March 2022"
              title="AsyncResourceView - Simplified Resource Loading"
              body={
                <div>
                  <p>
                  Modern apps heavily rely on resources that are received 
                  over the network, and hence may be affected by connectivity issues 
                  or data loss. If, for example, you travel by train within Germany, 
                  you may be surprised how often you will experience radio gaps or 
                  interruptions due to weak cellular reception. Hence, we as developers 
                  have to design our apps to include feedback when an action takes longer 
                  than expected and offer the ability to retry the action in case that 
                  it failed. This way, we can make our apps stand out, since they can 
                  cope with conditions that are far from optimal.
                  </p>
                  <p>
                  AsyncResourceView offers a consistent way to deal with loading as well as 
                  error states in SwiftUI applications. This way, developers can focus on 
                  features rather than writing repetitive error-prone code.
                  </p>
                </div>
              }
            />
            <ArticleItem
              id="09_03_2021"
              date="9th of March 2021"
              title="Building a native macOS app using SwiftUI and Combine"
              body={
                <div>
                  <p>
                    Have you ever been asked to put together the list of licenses
                    of all frameworks that are used within your iOS, iPad OS, or
                    macOS app? Manually completing this task quickly becomes
                    tedious but may be required due to legal- or customer
                    requests.
                  </p>
                  <p>
                    To mitigate this issue, I developed Licenses, a native macOS
                    app that automates this procedure by collecting and exporting
                    your licenses into a single spreadsheet (CSV) file.
                  </p>
                </div>
              }
            />
          </div>
        }/>
        <Route path=":date" element={<Article />} />
      </Routes>
    </div>
  );
}
