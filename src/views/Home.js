import Header from "../components/Header";
import Base from "../components/Base";
import Navigation from "../components/Navigation";

function Home({ setArticles, articles }) {
  return (
    <div>
      <Header />
      <Base setArticles={setArticles} articles={articles} />
      <Navigation />
    </div>
  );
}

export default Home;
