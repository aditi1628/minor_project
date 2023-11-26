// Import React
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// Create a functional component
const Spinner = () => {
  const [count , setCount ] = useState(5)
  const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(()=>{
      setCount((prevvalue) => --prevvalue )
    },1000)
    count === 0 && navigate("/login")
    return () => clearInterval(interval)
  },[count,navigate])

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{height: "100vh"}}>
        <h1 className="Text-center">redirecting to you in {count} seconds</h1>
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

// Export the component
export default Spinner;
