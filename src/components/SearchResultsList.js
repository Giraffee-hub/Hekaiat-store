import SearchResult from "./SearchResult"
import "./SearchResultsList.css"

export default function SearchResultsList ({results}) {
    return (
        <div className="results-list">
            {
                results.map((result, id) => {
                    return <SearchResult key={id} result={result}/>
                })
            }
        </div>
    )
}