import { Link, Navigate } from "react-router-dom";
import Header from "../Header";
import Cookies from "js-cookie";

export default function NotFound (){

    const jwt_token = Cookies.get("jwt_token")
    if(jwt_token === undefined){
        return <Navigate to="/login" />
    }
    
    return (
        <>
        <Header/>
    <h1>About</h1>
    <Link to="/"><button>Home</button></Link>
    </>
    )

}