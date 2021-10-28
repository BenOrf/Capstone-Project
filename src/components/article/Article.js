function Article({ setArticles, article }) {
  function handleRemove() {
    setArticles((prevArticles) =>
      prevArticles.filter((item) => item.name !== article.name)
    );
  }

  return (
    <div className="w-full">
      <div className="m-3 bg-blue-100 rounded-md shadow-xl border border-gray-200 p-3 flex items-center justify-between">
        <div className="flex justify-between w-full mr-3">
          <p>{article.name}</p>
          <p>{article.price} €</p>
          <p> Anzahl: {article.amount}</p>
        </div>
        <button
          onClick={handleRemove}
          className="bg-red-500 h-6 w-6 text-gray-100 rounded-md"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Article;
