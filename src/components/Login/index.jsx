
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./index.css"
import Cookies from "js-cookie"


export default function LoginForm(){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const jwt_token = Cookies.get("jwt_token")
  if(jwt_token !== undefined){
      return <Navigate to="/" />
  }
  const handleUsernameChange = (e)=>{
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e)=>{
    setPassword(e.target.value)
  }

  const onSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, {expires: 30})
    navigate("/")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      username:username,
      password:password
    }

    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })

    const data = await response.json()

    if (response.ok === true){
      onSuccess(data)
    }else{
      console.log("Authentication Failed")
    }

      
  }

  return(
    <div className="login-container">
      <div className="login-form-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )

}