import React from "react";
import '../../scss/components/customButton/customButton.scss';

// the selected role depends on the applied css and thus the button appearance
// roles to choose from:
// confirmButton
// errorButton 
// withBorder 
// withBorderError

export default function CustomButton({ onClick, role, title }) {
  return <button className={`${role}`} onClick={onClick}>{title}</button>;
}
