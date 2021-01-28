import React from "react";
import "../../scss/layouts/appLayouts.scss";
import tpLogo from "../../assets/logo/TP.svg";

export default function AppLayout({ children }) {
  return (
    <div className="appLayout">
      <div className="appLayout_navBar">
        <h5>Lista Specjalistów</h5>
      </div>
      <div className="appLayout_leftBar">
        <img src={tpLogo} alt="tpLogo"></img>
      </div>
      <div style={{ marginLeft: "81px", backgroundColor: "#E5E5E5", height: "100vh"}}>{children}</div>
    </div>
  );
}
