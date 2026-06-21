import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  let location = useLocation();
  let email
  if (!location.state) {
    email = "Marry@Gmail.Com";
  } else {
    email = location.state.email;
  }

  return (
    <div className="flex justify-center items-center bg-[#F7F8F9] w-full">
      <div className="h-screen w-93.75 flex border-[#cccdcf] border flex-col justify-start items-start">
        <div className="bg-[#FFFFFF] h-17 w-full flex justify-start items-center px-3.75">
          <h2 className="text-[18px]">Account Settings</h2>
        </div>
        <div className="flex w-full h-34 py-7.5">
          <div className="basis-29 flex justify-center items-center relative">
            <img src="/profile.png" alt="" className="h-full" />
            <img
              src="/Group 1585.svg"
              alt=""
              className="h-5.75 absolute top-12.5 right-4.5"
            />
          </div>
          <div className="">
            <h4 className="text-[15px] text-[#1D2226]">Marry Doe</h4>
            <h4 className="text-[14px] text-[#1D2226]">{email}</h4>
          </div>
        </div>
        <div>
          <p className="text-[14px] px-2.5 text-[#1D2226]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
