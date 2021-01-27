import React from "react";
import "../../scss/components/customTextArea/customTextArea.scss";

export const CustomTextArea = ({ labelText, textAreaChange }) => {
  return (
    <div>
      <div className="textArea">
        <label className="textArea_label">{labelText}</label>
        <textarea
        className="textArea_area"
          //   onChange={(e) => textAreaChange(e)}
          type="text"
        />
      </div>
    </div>
  );
};
