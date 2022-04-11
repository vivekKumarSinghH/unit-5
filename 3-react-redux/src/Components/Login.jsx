import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginFailure, loginLoading, loginSuccess } from "../Redux/Login/actions";
import "../App.css"
export default function Login() {
  const [userData, setUserData] = useState({
    password: "",
    username: "",
  });

  const dispatch=useDispatch()
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
dispatch(loginLoading())

    axios.post("https://masai-api-mocker.herokuapp.com/auth/login", userData)
      .then((res) => {
    
        dispatch(loginSuccess( res.data.token));
            
        navigate("/");
       
      })
      .catch((err)=>  {dispatch(loginFailure())
        navigate("/signup")}
      )

    setUserData({
      password: "",
      username: "",
    });
  };

  return (
    <div className="form">
      <input
        placeholder="Enter your username"
        id="username"
        type="text"
        onChange={handleChange}
        value={userData.username}
      />

      <input
        placeholder="Enter your password"
        id="password"
        type="password"
        onChange={handleChange}
        value={userData.password}
      />

      <button onClick={handleSubmit}>Login</button>
      <button onClick={() => navigate("/signup")}>
        If you don't have an account go to Signup
      </button>
    </div>
  );
}
