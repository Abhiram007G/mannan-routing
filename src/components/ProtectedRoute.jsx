import {Route, Navigate} from "react-router-dom"
import Cookies from "js-cookie"
import LoginForm from "./Login";
import Home from "./Home";


const ProtectedRoute = (props) =>{
    const jwt_token = Cookies.get("jwt_token");
    if (jwt_token === undefined){
        return <LoginForm/>
    }else{
        const Component = props.element
        console.log(props)
        console.log(<Component></Component>)
        return <Home />
    }
}

export default ProtectedRoute;