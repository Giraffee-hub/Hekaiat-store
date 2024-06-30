import { Link } from "react-router-dom";
import "./Product.css";

export default function Product({ product }) {
  return (
    <div className={"product"}>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt="Note"/>
      </Link>

      <Link to={`/products/${product.id}`}  className={"productInfo"}>
        <h3 href="#">{product.title}</h3>
        <p>{product.info}</p>
        <h2><span>EGP</span>{product.price}</h2>
      </Link>
    </div>
  );
}
