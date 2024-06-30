import products from "../data/products";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import "./SearchArea.css";

export default function SearchArea ({setResults}) {
  const [searchInput, setSearchInput] = useState("");
  const [productsFound, setProductsFound] = useState([]);

    const handleChange = (value) => {
      setSearchInput(value);
      fetchData(value);
      console.log("Search word: ", searchInput)
    }

    const fetchData = (value) => {
      const results = products.filter((product) => {
        return (value && product && product.title && product.title.toLowerCase().includes(value)) || (value && product.info.includes(value));
      });
      console.log(results);
      setResults(results);
    }

    function searchNow() {
    console.log(searchInput);
    let searchProducts = [];
    for (let i = 0; i < products.length; i++) {
        if (
        products[i].title
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        ) {
        searchProducts.push(products[i]);
        }
    }
    setProductsFound(searchProducts)
    console.log("The products you search is: ", searchProducts);
    console.log("We Found: ", productsFound);
    }

    return (
    <div className={"searchArea"}>
        <input
          placeholder="What are you looking for?"
          value={searchInput}
          onChange={(event) => handleChange(event.target.value)}
        />
        <button onClick={searchNow}>
          <IoSearchSharp className="searchIcon"/>
        </button>
    </div>
    )
}