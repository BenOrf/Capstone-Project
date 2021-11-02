import Header from "../components/Header";
import Base from "../components/Base";
import Navigation from "../components/Navigation";

function Home({ setArticles, articles, setDeletedArticles }) {
  return (
    <div>
      <Header />
      <Base
        setArticles={setArticles}
        articles={articles}
        setDeletedArticles={setDeletedArticles}
      />
      <Navigation />
    </div>
  );
}

export default Home;
