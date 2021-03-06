import Article from "../components/article/Article";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../assets/css/animation.css";

function Base({ setArticles, articles, setDeletedArticles }) {
  const calculateSum = (articles) => {
    let price = 0;
    articles.forEach((article) => {
      price += parseFloat(article.price.replace(",", ".")) * article.amount;
    });
    return price.toFixed(2);
  };
  const totalPrice = calculateSum(articles);
  return (
    <div style={{ height: "calc(100vh - 8rem)" }} className="overflow-auto">
      <TransitionGroup component="div">
        {articles.length > 0 &&
          articles.map((article) => (
            <CSSTransition key={article.name} timeout={400} classNames="item">
              <Article
                setArticles={setArticles}
                article={article}
                setDeletedArticles={setDeletedArticles}
              />
            </CSSTransition>
          ))}
      </TransitionGroup>
      <p className="px-3 text-2xl mt-4 text-gray-700">Gesamt: {totalPrice} €</p>
    </div>
  );
}

export default Base;
