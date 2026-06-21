import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup_screen = () => {
  const navigate = useNavigate();
  let [formdata, setFormdata] = useState({});
  let [empty, setEmpty] = useState(true);

  let update = (e) => {
    setFormdata((data) => ({ ...data, [e.target.name]: e.target.value }));
    if (
      formdata.email &&
      formdata.password &&
      formdata.full_name &&
      formdata.phone_number &&
      formdata.agency
    ) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  };
  return (
    <div className="flex justify-center items-center bg-[#F7F8F9] w-full">
      <div className="h-screen w-93.75 flex flex-col justify-start items-start px-5 py-10 gap-3.5 border-[#cccdcf] border">
        <h1 className="text-[28px] w-47">Create your PopX account</h1>
        <div className="h-full">
          <form
            action=""
            className="flex flex-col justify-between h-full w-full gap-3.5"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/profile/", {
                state: { email: formdata.email, password: formdata.password },
              });
            }}
          >
            <div>
              <div className="flex flex-col w-full justify-center items-start ">
                <label
                  htmlFor="full_name"
                  className="text-[13px] relative top-2.5 left-3.5 bg-[#F7F8F9] text-[#6C25FF] "
                >
                  Full Name<span className="text-[#DD4A3D]">*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="Enter full name"
                  className="border-[#CBCBCB] border w-83.75 h-10 rounded-md px-3.5"
                  onChange={update}
                  required
                />
              </div>
              <div className="flex flex-col w-full justify-center items-start ">
                <label
                  htmlFor="phone_number"
                  className="text-[13px] relative top-2.5 left-3.5 bg-[#F7F8F9] text-[#6C25FF] "
                >
                  Phone number<span className="text-[#DD4A3D]">*</span>
                </label>
                <input
                  type="number"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Enter phone number"
                  className="border-[#CBCBCB] border w-83.75 h-10 rounded-md px-3.5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  onChange={update}
                  required
                />
              </div>
              <div className="flex flex-col w-full justify-center items-start ">
                <label
                  htmlFor="email"
                  className="text-[13px] relative top-2.5 left-3.5 bg-[#F7F8F9] text-[#6C25FF] "
                >
                  Email address<span className="text-[#DD4A3D]">*</span>
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
                  className="text-[13px] relative top-2.5 left-3.5 bg-[#F7F8F9] text-[#6C25FF] "
                >
                  Password<span className="text-[#DD4A3D]">*</span>
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
              <div className="flex flex-col w-full justify-center items-start ">
                <label
                  htmlFor="company name"
                  className="text-[13px] relative top-2.5 left-3.5 bg-[#F7F8F9] text-[#6C25FF] "
                >
                  Company name
                </label>
                <input
                  type="text"
                  name="company name"
                  id="company name"
                  placeholder="Enter company name"
                  className="border-[#CBCBCB] border w-83.75 h-10 rounded-md px-3.5"
                  onChange={update}
                />
              </div>
              <div className="flex flex-col w-full justify-center items-start ">
                <label
                  htmlFor="company name"
                  className="text-[13px] bg-[#F7F8F9] text-[#1D2226] mt-4.5"
                >
                  Are you an Agency?<span className="text-[#DD4A3D]">*</span>
                </label>
                <div className="flex w-full justify-start items-start mt-3.25">
                  <input
                    type="radio"
                    name="agency"
                    id="yes"
                    className="accent-[#642AF5] w-5.5 mr-3 h-5.5"
                    required
                    value={true}
                    onChange={update}
                  />
                  <label htmlFor="yes" className="mr-5.75">
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="agency"
                    id="no"
                    className="accent-[#642AF5] w-5.5 mr-3 h-5.5"
                    required
                    value={false}
                    onChange={update}
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>

            <button
              className={`w-full h-11.5 text-[16px] rounded-md mb-2.5  text-[#FFFFFF] ${empty ? "bg-[#CBCBCB]" : "bg-[#6C25FF]"}`}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup_screen;
