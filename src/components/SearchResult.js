import "./SearchResult.css";

export default function SearchResult({ result }) {
  return (
    <div
      className="search-result"
      onClick={(event) => {
        alert(`You Clicked On ${result.title}`);
      }}
    >
      {result.title}
    </div>
  );
}
