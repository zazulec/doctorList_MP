import React from "react";
import '../../scss/components/customButton/customButton.scss';


export default function CustomButton({ onClick, role, title }) {
  return <button className={`${role}`} onClick={onClick}>{title}</button>;
}
