import React from "react";
import "../../scss/components/customTextArea/customTextArea.scss";

export const CustomTextArea = ({ labelText, handleTextArea, data }) => {
  return (
    <div>
      <div className="textArea">
        <label className="textArea_label">{labelText}</label>
        <textarea
          className="textArea_area"
          onChange={(e) => handleTextArea(e.target.value)}
          type="text"
          defaultValue={data}
        />
      </div>
    </div>
  );
};
