import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import CreateArticle from "./views/CreateArticle";
import { useState, useEffect } from "react";

function App({ prevArticles }) {
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem("articles")) || []
  );

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  return (
    <Router>
      <Route path="/" exact>
        <Home articles={articles} setArticles={setArticles} />
      </Route>
      <Route path="/create">
        <CreateArticle setArticles={setArticles} />
      </Route>
    </Router>
  );
}

export default App;
