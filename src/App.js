import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Delivery from "./components/Delivery";
import products from "./data/products";
import Footer from "./components/Footer";
import { useEffect } from "react";

const allProdcuts = products.map((product) => {
  return (
    <Product key={product.id} product={product}/>
  );
});

function App() {
  useEffect (() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className="App">
      <Delivery />
      <div className="mainSection">
        <Header />
        <div className="products">
          {allProdcuts}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
