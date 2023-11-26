import React , { useState } from 'react';
import Layout from '../../components/Layout/Layout'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';

const Login = () => {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth ,setauth] = useAuth()
    const navigate = useNavigate();

     // form function
   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email,password);
    toast.success('Register Successfully');
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setauth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
        });
        localStorage.setItem('auth',JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

 

  return (
    <Layout title="Register ->AgriMart">
        <div className="form-container">
            <h1>Login Page</h1>

   <form onSubmit={handleSubmit}>
  

  <div className="mb-3">
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email" required/> 
  </div>


  <div className="mb-3">
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" required/>
  </div>

  <div className="mb-3">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>

  <button type="submit" className="btn btn-primary">LOGIN</button>
</form>

        </div>
    </Layout>
  )
}

export default Login
