const DeletedArticle = ({ article, setArticles, setDeletedArticles }) => {
  function handleAdd() {
    setArticles((prevArticles) => [...prevArticles, article]);
    setDeletedArticles((prevArticles) =>
      prevArticles.filter((item) => item.name !== article.name)
    );
  }

  function handleRemove() {
    setDeletedArticles((prevArticles) =>
      prevArticles.filter((item) => item.name !== article.name)
    );
  }

  return (
    <div className="w-full">
      <div className="mt-3 bg-blue-100 rounded-md shadow-xl border border-gray-200 p-3 flex items-center justify-between">
        <div className="flex justify-between w-full mr-3">
          <p className="w-1/3">{article.name}</p>
          <p className="w-1/3">{article.price} €</p>
          <p> Anzahl: {article.amount}</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-green-500 h-6 w-6 text-gray-100 rounded-md"
        >
          +
        </button>
        <button
          onClick={handleRemove}
          className="bg-red-500 h-6 w-6 text-gray-100 rounded-md"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default DeletedArticle;
