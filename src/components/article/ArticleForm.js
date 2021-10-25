import {useState} from "react";

function ArticleForm({setArticles}) {
    const [name, setName] = useState('');

    function handleClick() {
        setArticles(prevArticles => [...prevArticles, name]);
        setName('');
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <div style={{ height: 'calc(100vh - 8rem)'}} className="px-8">
            <div className="flex flex-col pt-8">
                <p className="mb-2">Artikelname</p>
                <input
                    onChange={handleNameChange}
                    value={name}
                    className="px-3 py-2 rounded-md border border-gray-300"
                />
                <button
                    onClick={handleClick}
                    className="mt-4 py-2 text-gray-100 bg-blue-400 rounded-md hover:bg-blue-500"
                >
                    Hinzufügen
                </button>
            </div>
        </div>
    );
}

export default ArticleForm;