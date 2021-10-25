import Header from '../components/Header';
import ArticleForm from '../components/article/ArticleForm';
import Navigation from '../components/Navigation';

function CreateArticle(props) {
    return (
        <div>
            <Header/>
            <ArticleForm
                setArticles={props.setArticles}
            />
            <Navigation/>
        </div>
    );
}

export default CreateArticle;