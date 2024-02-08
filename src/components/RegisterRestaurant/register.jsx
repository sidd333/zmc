import React from "react";
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
} from "react-icons/pi";

const RegisterLeft = () => {
  return (
    <div className="sm:w-1/3 sm:block hidden ">
      <div className=" bg-white shadow-md mr-8  sticky top-10">
        <h3 className="text-lg">1. Create your restaurant page</h3>
        <hr className="w-3/4 bg-gray-400 mb-2" />
        <div className="w-full flex">
          <div className="w-1/4 text-sm break-words flex justify-center border-l-2 border-blue-500 h-fit">
            {" "}
            <PiNumberCircleOneFill className="text-blue-600 text-2xl " />
          </div>
          <div className="w-3/4 text-sm">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            veritatis veniam nam numquam suscipit debitis quia corrupti nobis at
            nemo sunt, architecto quis praesentium aut quibusdam nisi tempora
            eos ipsum.
          </div>
        </div>

        <div className="w-full flex">
          <div className="w-1/4 text-sm break-words flex justify-center border-l-2 border-blue-500 h-fit">
            {" "}
            <PiNumberCircleTwoFill className="text-blue-600 text-2xl " />
          </div>
          <div className="w-3/4 text-sm">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            veritatis veniam nam numquam suscipit debitis quia corrupti nobis at
            nemo sunt, architecto quis praesentium aut quibusdam nisi tempora
            eos ipsum.
          </div>
        </div>

        <div className="w-full flex">
          <div className="w-1/4 text-sm break-words flex justify-center border-l-2 border-blue-500 h-fit">
            {" "}
            <PiNumberCircleThreeFill className="text-blue-600 text-2xl " />
          </div>
          <div className="w-3/4 text-sm">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            veritatis veniam nam numquam suscipit debitis quia corrupti nobis at
            nemo sunt, architecto quis praesentium aut quibusdam nisi tempora
            eos ipsum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLeft;
