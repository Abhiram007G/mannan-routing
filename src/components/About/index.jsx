import { Link } from "react-router-dom";
import Header from "../Header";

export default function NotFound (){
    return (
        <>
        <Header/>
    <h1>About</h1>
    <Link to="/"><button>Home</button></Link>
    </>
    )

}