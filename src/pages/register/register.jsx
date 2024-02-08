import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { useSelector, useDispatch } from "react-redux";
import { setToggle } from "../../redux/features/register/registerSlice";

import RegisterLeft from "../../components/RegisterRestaurant/register";

const Register = () => {
  const dispatch = useDispatch();

  const slideNumber = useSelector((state) => state.register.toggle);

  return (
    <div className="bg-gray-100">
      <div className="border-b-2 border-gray-300">
        <div className="flex justify-between w-1/2 mx-auto ">
          {" "}
          <h3 className="text-2xl font-extrabold font font-comforta pt-2 ">
            ZOMATO
          </h3>{" "}
          <h3 className="text-2xl font-extrabold font font-comforta pt-2 ">
            LOGIN
          </h3>
        </div>
      </div>

      <div className="w-1/2 mx-auto flex justify-center mt-4 ">
        <RegisterLeft />

        <div className="w-2/3   bg-white shadow-md"></div>
      </div>
      <div className="fixed bottom-0 py-2 px-12 bg-white w-full shadow-lg z-10 flex justify-between">
        {" "}
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          previous
          {/* submit  */}
        </button>
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={() => {
            console.log(slideNumber);
            return dispatch(setToggle({ value: 1 }));
          }}
        >
          next
          {/* submit  */}
        </button>
      </div>
    </div>
  );
};

export default Register;
