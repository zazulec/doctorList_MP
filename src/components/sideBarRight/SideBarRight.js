import React from "react";
import "../../scss/components/sideBarRight/sideBarRight.scss";
import { CustomInput } from "../customInput/CustomInput";
import { CustomTextArea } from "../customTextArea/CustomTextArea";

export default function SideBarRight() {
  return (
    <div className="sideBarRight">
      X<h5>Edytuj informacje o specjaliście</h5>
      <CustomInput labelText="Imię i nazwisko" value="" />
      <CustomTextArea labelText="O mnie" />
    </div>
  );
}
