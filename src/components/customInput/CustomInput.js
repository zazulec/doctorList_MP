import React from "react";
import "../../scss/components/customInput/customInput.scss";

export const CustomInput = ({ labelText, value }) => {
  return (
    <div className="customInput">
      <label>{labelText}</label>
      <input value={value} type="text" />
    </div>
  );
};
