import { useState } from "react";
import { Link } from "react-router-dom";
import SearchArea from "./SearchArea";
import SearchResultsList from "./SearchResultsList";
import "./Navbar.css";

export default function Navbar () {
    const [results, setResults] = useState([]);
    return (
        <div className="Navbar">
            <div className="links">
                <img className="logo"
                    src="../images/hekaiat.png"
                    alt="Hekaiat Logo"
                />
                <div>
                    <Link to="/" className="link active">Home</Link>
                    <Link to="/" className="link">About</Link>
                    <Link to="/" className="link">Conect Us</Link>
                </div>
            </div>
            <SearchArea setResults={setResults}/>
            <div className="search-continer">
                <SearchResultsList results={results}/>
            </div>
        </div>
    )
}