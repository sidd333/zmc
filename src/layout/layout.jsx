import React from "react";

const layout = (Component) => (props) => {
  return (
    //navbar
    <>
      <Component {...props} />
    </>
  );
};

export default layout;
