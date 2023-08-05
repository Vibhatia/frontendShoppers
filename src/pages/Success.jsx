import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLog = ()=>{
    navigate("/");
  }

  

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      
        <div>Order has been created successfully. Your order number is:</div>
        
      <button style={{ padding: 10, marginTop: 20,cursor:"pointer" }} onClick={handleLog}>Go to Homepage</button>
    </div> 
  );
};

export default Success;