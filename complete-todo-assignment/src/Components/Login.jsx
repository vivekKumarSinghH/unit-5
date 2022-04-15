
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import "../App.css";
import { login } from "../Redux/Login/action";



export default function Login() {
  const [userData, setUserData] = useState({
    password: "",
    username: "",
  });

  const {isAuth}=useSelector((store)=>store.login)

const dispatch=useDispatch()
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(login(userData))
    setUserData({
      password: "",
      username: "",
    });
  };
if(isAuth){
  return <Navigate to="/"/>
}

  return (
    <div className="formss">
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
