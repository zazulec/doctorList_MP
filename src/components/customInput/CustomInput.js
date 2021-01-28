import React from "react";
import "../../scss/components/customInput/customInput.scss";

export const CustomInput = ({ labelText, data, handleInput }) => {
  return (
    <div className="customInput">
      <label>{labelText}</label>
      <input
        defaultValue={data}
        type="text"
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  );
};
