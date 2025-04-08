import { Link, Navigate} from "react-router-dom";
import Header from "./Header";
import { Component } from "react";
import "./Allproduct.css"
import Cookies from "js-cookie";


export default class Allproduct extends Component {
    state={
        products:[],
        isLoading: true
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => this.setState({products:data, isLoading:false}));
    }

    render(){
        const {products, isLoading} = this.state
        const jwt_token = Cookies.get("jwt_token")
        if(jwt_token === undefined){
            return <Navigate to="/login" />
        }
        if(isLoading){
            return <div>Loading...</div>
        }
        return(
            <>
                <Header/>
                <h1>All Products</h1>
                <div className="product-grid">
                {products.map((product) => (
                <Link to={`/all-products/${product.id}`}>
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <div className="product-content">
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                        <button className="buy-button">Buy Now</button>
                        </div>
                    </div>
                </Link>
                ))}
             </div>
            </>
        )

    }
}     