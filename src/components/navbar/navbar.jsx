import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <div className="bg-transparent fixed top-0 flex w-full justify-between">
      <span></span>
      <span className="mr-60">
        <button
          className="middle none center rounded-lg py-3 px-6 font-sans  text-2xl  text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
        >
          todo-username
        </button>
        <button
          onClick={props.openModal}
          className="middle none center rounded-lg py-3 px-6 font-sans text-2xl   text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
        >
          todo-register
        </button>
        <button
          onClick={() => navigate("/addRes")}
          className="middle none center rounded-lg py-3 px-6 font-sans text-2xl   text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
        >
          todo-add restaurant
        </button>
      </span>
    </div>
  );
};

export default Navbar;
