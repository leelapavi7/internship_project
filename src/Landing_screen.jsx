import React from "react";
import { useNavigate } from "react-router-dom";

const Landing_screen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center bg-[#F7F8F9] w-full">
      <div className="h-screen flex flex-col justify-end items-center px-5 py-10 border-[#cccdcf] border">
        <div>
          <h1 className="text-[30px] font-medium mb-2.5">Welcome to PopX</h1>
          <p className="w-62.5 text-[18px] mb-7.25 opacity-[0.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <div className="flex flex-col justify-around items-center w-83.75">
            <button className="w-full h-11.5 text-[16px] rounded-md mb-2.5 bg-[#6C25FF] text-[#FFFFFF]"onClick={()=>navigate("/signup/")} >
              Create Account
            </button>
            <button className="w-full h-11.5 text-[16px] rounded-md mb-2.5 bg-[#6C25FF4B]" onClick={()=>navigate("/login/")}>
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_screen;
