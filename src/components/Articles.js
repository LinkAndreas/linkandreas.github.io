import React from "react";
import Article from "./Article.js";
import ArticleItem from "./ArticleItem.js";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import "../styles/Articles.css";

export default function Articles() {
  let { url, path } = useRouteMatch();
  return (
    <div className="articlesContainer">
      <Switch>
        <Route exact path={path}>
          <ArticleItem
            articleUrl={`${url}/07_03_2021`}
            date="7th of March 2021"
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
          ></ArticleItem>
        </Route>
        <Route exact path={`${path}/:date`} component={Article} />
      </Switch>
    </div>
  );
}
