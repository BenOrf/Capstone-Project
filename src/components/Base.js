import Article from '../components/article/Article';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../assets/css/animation.css';

function Base({setArticles, articles}) {
    return (
        <div style={{ height: 'calc(100vh - 8rem)'}} className="overflow-auto">
            <TransitionGroup component="div">
                {articles.length > 0 && articles.map((article) => (
                    <CSSTransition key={article.name} timeout={400} classNames="item">
                        <Article setArticles={setArticles} article={article}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

export default Base;