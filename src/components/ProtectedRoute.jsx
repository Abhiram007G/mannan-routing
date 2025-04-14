import {Route, Navigate, Outlet} from "react-router-dom"
import Cookies from "js-cookie"
import LoginForm from "./Login";
import Home from "./Home";


const ProtectedRoutes = () =>{
    const jwt_token = Cookies.get("jwt_token");
    if (jwt_token === undefined){
        return <Navigate to="/login"/>
    }else{
        return <Outlet/>
    }
}

export default ProtectedRoutes;