import { Link, Navigate } from "react-router-dom";
import Header from "../Header";
import Cookies from "js-cookie";

export default function About (){

    
    return (
        <>
        <Header/>
    <h1>About</h1>
    <Link to="/"><button>Home</button></Link>
    </>
    )

}