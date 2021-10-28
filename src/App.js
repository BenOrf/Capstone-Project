import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import CreateArticle from "./views/CreateArticle";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

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
