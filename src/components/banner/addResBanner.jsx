import React from "react";

const AddResBanner = () => {
  return (
    <div className="bg-pic2 bg-center bg-cover bg-no-repeat max-h-[500px]">
      <div className=" sm:py-40 py-10 sm:w-1/2 mx-auto   text-left text-white text ">
        <div className=" mx-auto">
          <h1 className=" sm:text-5xl text-xl p-1">
            Partner with Zomato at 0% commission for the 1st month!
          </h1>
          <h2 className="sm:text-xl not-italic  font-normal mt-4 mb-3  leading-relaxed p-1">
            And get ads worth INR 1500. Valid for new restaurant partners in
            select cities.
          </h2>
          <div className="sm:flex sm:w-full w-3/4 mx-auto">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border sm:w-1/2 w-full border-transparent bg-blue-100  py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mb-1"
            >
              Register Restaurant
              {/* submit  */}
            </button>

            <button
              type="button"
              className=" sm:ml-1 inline-flex justify-center rounded-md border sm:w-1/2 w-full border-transparent bg-blue-100  py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mb-1"
            >
              View Restaurant
              {/* submit  */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResBanner;
