import { useParams } from "react-router";
import { Link, Navigate} from "react-router";
import Header from "./Header";
import { useEffect, useState } from "react";
import "./Product.css"

import Cookies from "js-cookie";


export default function Product (){
    let {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/'+id)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProduct(data)
            setLoading(false)
    });
    },[])

    

    if(loading){
        return <div>Loading...</div>
    }
    return (
        <>
        <Header/>
        <div className="product-container">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-details">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="buy-button">Buy Now</button>
        </div>
        </div>
        </>
    )

}