import React from "react";
import "../../scss/layouts/appLayouts.scss";
import tpLogo from "../../assets/logo/TP.png";

export default function AppLayout({ children }) {
  return (
    <div className="appLayout">
      <div className="appLayout_navBar">
        <h5>Lista Specjalistów</h5>
      </div>
      <div className="appLayout_leftBar">
        <img src={tpLogo} alt="tpLogo"></img>
      </div>
      {children}
    </div>
  );
}
