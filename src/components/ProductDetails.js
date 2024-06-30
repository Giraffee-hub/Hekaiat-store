import { useParams } from "react-router-dom";
import products from "../data/products";
import Delivery from "./Delivery";
import Navbar from "./Navbar";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import ImagesList from "./ImagesList";
import Footer from "./Footer";

export default function ProductDetails () {
    useEffect (() => {
        window.scrollTo(0, 0);
    },[]);

    const [visClass, setVisClass] = useState("visClass");
    const params = useParams();
    const product = products.find(({id}) => id.toString() === params.productId);
    const productImages = product.imgs;
    const showImages = productImages.map((image) => {
        return (
            <ImagesList image={image} key={image.id}/>
        )
    })

    return (
        <div className="productDetails">
            <Delivery />
            <div className="mainSection">
                <Navbar />
                <div className="selectProduct">
                    <div className="imagesSection">
                        <div className="allImages">
                            {showImages}
                        </div>
                        <img id="mainImage" src={product.image} alt={product.title}/>
                    </div>
                    <div className="details">
                        <h1>{product.title}</h1>
                        <p>{product.info}</p>
                        <h2><span>EGP</span>{product.price}</h2>
                        <button>Add to bag</button>
                    </div>
                    <div className="aboutProduct">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, aperiam? A dolorem, repudiandae mollitia optio iste, quisquam natus accusamus magnam doloremque qui unde deserunt itaque quod! Placeat neque voluptas repellat?</p>
                        <h2 onClick={() => visClass ? setVisClass("") : setVisClass("visClass")}>Product details</h2>
                        <p className={visClass}>{product.details}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}