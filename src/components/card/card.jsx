import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Card = () => {
  return (
    <div className=" bg-white sm:w-1/2 w-3/4 mx-auto -mt-9 rounded-md">
      <h1 className="text-2xl text-center">Get started with online ordering</h1>
      <h2 className="text-center pt-2">
        Please keep the following ready for a smooth signup
      </h2>
      <div className="flex justify-between px-4 h-40 sm:pt-14 pt-6">
        <span>
          <div className="pb-4 flex gap-2">
            <FaCheckCircle className="bg-green-600 rounded-full mt-1" />{" "}
            <h3 className="">Restaurant Menu</h3>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="bg-green-600 rounded-full mt-1" />{" "}
            <h3>Restaurant Name</h3>
          </div>
        </span>
        <span>
          <div className="pb-4 flex gap-2">
            <FaCheckCircle className="bg-green-600 rounded-full mt-1" />{" "}
            <h3>Item Prices</h3>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="bg-green-600 rounded-full mt-1" />{" "}
            <h3>Restaurant Location</h3>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Card;
