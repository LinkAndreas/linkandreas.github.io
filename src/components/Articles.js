import React from "react";
import Article from "./Article.js";
import ArticleItem from "./ArticleItem.js";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import "../styles/Articles.css";

export default function Articles() {
  let match = useRouteMatch();
  return (
    <div className="articlesContainer">
      <Switch>
        <Route
          path={`${match.path}/:day/:month/:year/:articleId`}
          component={Article}
        />
        <Route exact path={match.path}>
          <ArticleItem
            articleUrl={`${match.url}/03/05/2020/article1`}
            date="3rd of May 2020"
            title="Article I"
            body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          ></ArticleItem>
          <ArticleItem
            articleUrl={`${match.url}/04/05/2020/article2`}
            date="4rd of May 2020"
            title="Article II"
            body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          ></ArticleItem>
        </Route>
      </Switch>
    </div>
  );
}
