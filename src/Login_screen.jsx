import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login_screen = () => {
  const navigate = useNavigate();
  let [formdata, setFormdata] = useState({});
  let [empty, setEmpty] = useState(true);

  let update = (e) => {
    setFormdata((data) => ({ ...data, [e.target.name]: e.target.value }));
    if (formdata.email && formdata.password) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
    console.log(empty);
  };
  return (
    <div className="flex justify-center items-center bg-[#F7F8F9] w-full">
      <div className="h-screen w-93.75 flex flex-col justify-start items-start px-5 py-10 gap-3.5 border-[#cccdcf] border">
        <h1 className="text-[28px] w-47">Signin to your PopX account</h1>
        <p className="w-62.5 text-[18px] opacity-[0.6]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div>
          <form
            action=""
            className="flex flex-col w-full gap-3.5"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/profile/", { state: formdata });
            }}
          >
            <div>
              <div className="flex flex-col w-full justify-center items-start ">
                <label
                  htmlFor="email"
                  className="text-[13px] relative top-2.5 left-3.5 bg-[#F7F8F9] text-[#6C25FF] "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  className="border-[#CBCBCB] border w-83.75 h-10 rounded-md px-3.5"
                  onChange={update}
                  required
                />
              </div>
              <div className="flex flex-col w-full justify-center items-start ">
                <label
                  htmlFor="password"
                  className="text-[13px] relative top-2.5 left-3.5` bg-[#F7F8F9] text-[#6C25FF]"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  className="border-[#CBCBCB] border w-83.75 h-10 rounded-md px-3.5"
                  onChange={update}
                  required
                />
              </div>
            </div>
            <button
              className={`w-full h-11.5 text-[16px] rounded-md mb-2.5  text-[#FFFFFF] ${empty ? "bg-[#CBCBCB]" : "bg-[#6C25FF]"}`}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login_screen;
