import React from "react";
import "../../scss/layouts/appOverlay.scss";

export default function AppOverlay({ children, closeModals }) {
  const closeAllModals = (e) => {
      console.log(e.target.id)
    if (e.target.id === "overlay") {
       return closeModals()
    }
  };
  return (
    <div className="appOverlay" id="overlay" onClick={(e) => closeAllModals(e)}>
      {children}
    </div>
  );
}
