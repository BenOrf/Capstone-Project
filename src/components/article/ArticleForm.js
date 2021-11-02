import { useState } from "react";
import DeletedArticle from "./DeletedArticle";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../assets/css/animation.css";

function ArticleForm({ setArticles, setDeletedArticles, deletedArticles }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  function handleClick() {
    setArticles((prevArticles) => [
      ...prevArticles,
      {
        name: name,
        amount: amount,
        price: price,
      },
    ]);
    setName("");
    setAmount("");
    setPrice("");
  }

  return (
    <div style={{ height: "calc(100vh - 8rem)" }} className="px-8">
      <div className="flex flex-col pt-8">
        <p className="mb-2">Artikelname</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Brot"
          className="w-full px-3 py-2 rounded-md border border-gray-300 mr-3"
        />
        <div className="flex mt-3">
          <input
            onChange={(e) => setAmount(parseInt(e.target.value))}
            value={amount}
            type="number"
            placeholder="1"
            className="w-1/2 mr-1 px-3 py-2 rounded-md border border-gray-300"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder="1,50"
            className="w-1/2 ml-1 px-3 py-2 rounded-md border border-gray-300"
          />
        </div>
        <button
          onClick={handleClick}
          className="mt-4 py-2 text-gray-100 bg-blue-400 rounded-md hover:bg-blue-500"
        >
          Hinzufügen
        </button>
      </div>
      <div className="mt-8">
        <p>Gelöschte Artikel</p>
        <TransitionGroup component="div">
          {deletedArticles.length > 0 &&
            deletedArticles.map((article) => (
              <CSSTransition key={article.name} timeout={400} classNames="item">
                <DeletedArticle
                  article={article}
                  setArticles={setArticles}
                  setDeletedArticles={setDeletedArticles}
                />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default ArticleForm;
