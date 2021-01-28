import React from "react";
import "../../scss/components/mainModal/mainModal.scss";
import CustomButton from "../customButton/CustomButton";

import { deleteTherapistData } from "../../actions/mainActions";
import { useDispatch } from "react-redux";

export function MainModal({
  setToggleMainModal,
  setToggleSideBarRight,
  setToggleAppOverlay,
  singleTherapistId,
}) {
  const dispatch = useDispatch();

  const cancelDeleteTherapistData = () => (
    setToggleMainModal(false), setToggleSideBarRight(true)
  );

  const deleteTherapist = (singleTherapistId) => (
    dispatch(deleteTherapistData(singleTherapistId)),
    setToggleMainModal(false),
    setToggleAppOverlay(false),
    alert("react.toastify... 'Pomyślnie usunięto użytkownika.' :)")
  );

  return (
    <div className="mainModal">
      <div className="mainModal_content">
        <h5>Usunąć ofertę?</h5>
        <p>
          Czy na pewno chcesz usunąć tego specjalistę? Tej akcji nie można
          cofnąć.
        </p>
        <div className="mainModal_content--buttons">
          <CustomButton
            role="withBorder"
            title="Anuluj"
            onClick={() => cancelDeleteTherapistData()}
          />
          <CustomButton
            role="errorButton"
            title="Usuń"
            onClick={() => deleteTherapist(singleTherapistId)}
          />
        </div>
      </div>
    </div>
  );
}
