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
            articleUrl={`${url}/03/05/2020/article1`}
            date="6th of March 2021"
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
          <ArticleItem
            articleUrl={`${url}/04/05/2020/article2`}
            date="4rd of May 2020"
            title="Article II"
            body={
              <p>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet."
              </p>
            }
          ></ArticleItem>
        </Route>
        <Route
          exact
          path={`${path}/:day/:month/:year/:articleId`}
          component={Article}
        />
      </Switch>
    </div>
  );
}
