import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import CreateArticle from "./views/CreateArticle";
import { useState, useEffect } from "react";

function App() {
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem("articles")) || []
  );

  const [deletedArticles, setDeletedArticles] = useState(
    JSON.parse(localStorage.getItem("deletedArticles")) || []
  );

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem("deletedArticles", JSON.stringify(deletedArticles));
  }, [deletedArticles]);

  return (
    <Router>
      <Route path="/" exact>
        <Home
          articles={articles}
          setArticles={setArticles}
          setDeletedArticles={setDeletedArticles}
        />
      </Route>
      <Route path="/create">
        <CreateArticle
          setDeletedArticles={setDeletedArticles}
          deletedArticles={deletedArticles}
          setArticles={setArticles}
        />
      </Route>
    </Router>
  );
}

export default App;
