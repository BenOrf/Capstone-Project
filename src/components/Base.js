import { useState } from "react";
import Card from "./Card";

function Base() {
  
    const [articles, setArticles] = useState([]);

    return (
        <div style={{ height: 'calc(100vh - 8rem)' }}>
            {articles.length && articles.map((articles) =>
                <Card key={articles.id} name={articles}/>
            )}
        </div>
    );
}

export default Base;