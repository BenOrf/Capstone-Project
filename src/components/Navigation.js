import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div className="bg-gray-800 h-16 flex items-center justify-center">
            <Link className="bg-gray-700 rounded-md w-1/2 text-center text-gray-100 py-2 ml-2" to="/">Startseite</Link>
            <Link className="bg-gray-700 rounded-md w-1/2 text-center text-gray-100 py-2 mx-2" to="/create">Artikel hinzufügen</Link>
        </div>
    )
}

export default Navigation;