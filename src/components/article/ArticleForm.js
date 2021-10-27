import {useState} from "react";

function ArticleForm({setArticles}) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(1);

    function handleClick() {
        setArticles(prevArticles => [...prevArticles, {
            name: name,
            amount: amount,
        }]);
        setName('');
        setAmount(1);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }


    function handleAmountChange(event) {
        setAmount(parseInt(event.target.value));
    }

    return (
        <div style={{ height: 'calc(100vh - 8rem)'}} className="px-8">
            <div className="flex flex-col pt-8">
                <p className="mb-2">Artikelname</p>
                <div className="flex">
                    <input
                        onChange={handleNameChange}
                        value={name}
                        className="w-3/4 px-3 py-2 rounded-md border border-gray-300 mr-3"
                    />
                    <input
                        onChange={handleAmountChange}
                        value={amount}
                        type="number"
                        className="w-1/4 px-3 py-2 rounded-md border border-gray-300"
                    />
                </div>
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