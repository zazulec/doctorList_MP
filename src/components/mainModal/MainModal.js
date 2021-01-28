import React from "react";
import CustomButton from "../customButton/CustomButton";
import "../../scss/components/mainModal/mainModal.scss";

export function MainModal({ setToggleMainModal }) {
  return (
    <div className="mainModal">
        <div className="mainModal_content">
      <h5>Usunąć ofertę?</h5>
      <p>
        Czy na pewno chcesz usunąć tego specjalistę? Tej akcji nie można cofnąć.
      </p>
      <div className="mainModal_content--buttons">
      <CustomButton role="withBorder" title="Anuluj" />
      <CustomButton role="errorButton" title="Usuń" />
      </div>
    </div>
    </div>
  );
}
