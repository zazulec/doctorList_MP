import React, { useState, useEffect } from "react";
import "../../scss/components/sideBarRight/sideBarRight.scss";
import { CustomInput } from "../customInput/CustomInput";
import { CustomTextArea } from "../customTextArea/CustomTextArea";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleTherapistData,
  saveEditedTherapistInfo,
} from "../../actions/mainActions";
import CustomButton from "../customButton/CustomButton";
import closeButton from "../../assets/images/close_24px.svg";

export default function SideBarRight({
  therapistId,
  setToggleAppOverlay,
  setToggleMainModal,
  setToggleSideBarRight
}) {
  const singleTherapist = useSelector((state) => state.main.singleTherapist);
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState(null);
  const [aboutMe, setAboutMe] = useState(null);
  const [isEdited, setIsEdited] = useState(true);

  useEffect(() => {
    if (singleTherapist === null) {
      dispatch(fetchSingleTherapistData());
    }
    if (singleTherapist !== null) {
      setFullName(singleTherapist.fullName);
      setAboutMe(singleTherapist.aboutMe);
    }
  }, [dispatch, singleTherapist]);

  const saveTherapistData = (fullName, aboutMe) => {
    return (
      setIsEdited((prevState) => !prevState),
      dispatch(saveEditedTherapistInfo(fullName, aboutMe)),
      alert("react.toastify... 'Zapisano Dane' :)")
    );
  };

  const deleteSingleTherapist = () => {
    return (
      setToggleAppOverlay(true), 
      setToggleMainModal(true)
    );
  };

  return (
    <div className="sideBarRight">
      <button
        className="sideBarRight_closeButton"
        onClick={() => setToggleAppOverlay((prevState) => !prevState)}
      >
        <img src={closeButton} alt="closeButton"></img>
      </button>
      <hr style={{ width: "100%", marginTop: "51px" }}></hr>
      <div className="sideBarRight_contentWrapper">
        {singleTherapist !== null ? (
          <>
            {isEdited ? (
              <>
                <h5>Informacje o specjaliście</h5>
                <p>
                  <label className="sideBarRight_contentWrapper--label">
                    Imię i nazwisko
                  </label>
                  <span className="sideBarRight_contentWrapper--info">
                    {singleTherapist.fullName}
                  </span>
                </p>
                <p>
                  <label className="sideBarRight_contentWrapper--label">
                    Specjalizacje
                  </label>
                  <span className="sideBarRight_contentWrapper--info">
                    {singleTherapist.specializations.map((e, index) => (
                      <span
                        key={index}
                        className="sideBarRight_contentWrapper--info--specializations"
                      >{`${e} ${
                        index < singleTherapist.specializations.length - 1
                          ? ",\u00A0"
                          : ""
                      }`}</span>
                    ))}
                  </span>
                </p>
                <p>
                  <label className="sideBarRight_contentWrapper--label">
                    Rodzaje terapii
                  </label>
                  <span className="sideBarRight_contentWrapper--info">
                    {singleTherapist.therapyTypes.map((e, index) => (
                      <span
                        key={index}
                        className="sideBarRight_info--specializations"
                      >{`${e} ${
                        index < singleTherapist.therapyTypes.length - 1
                          ? ",\u00A0"
                          : ""
                      }`}</span>
                    ))}
                  </span>
                </p>
                <p>
                  <label className="sideBarRight_contentWrapper--label">
                    Rodzaje Certyfikatów
                  </label>
                  <span className="sideBarRight_contentWrapper--info">
                    <ul>
                      {singleTherapist.certificates.map((e, index) => (
                        <li key={index}>{e.name}</li>
                      ))}
                    </ul>
                  </span>
                </p>
                <p>
                  <label className="sideBarRight_contentWrapper--label">
                    O mnie
                  </label>
                  <span className="sideBarRight_contentWrapper--info">
                    {singleTherapist.aboutMe}
                  </span>
                </p>
                <div className="sideBarRight_contentWrapper--buttonsContainer">
                  <CustomButton
                    role="withBorder"
                    title="Edytuj"
                    onClick={() => setIsEdited((prevState) => !prevState)}
                  ></CustomButton>
                  <CustomButton
                    role="withBorderError"
                    title="Usuń"
                    onClick={() => deleteSingleTherapist()}
                  ></CustomButton>
                </div>
              </>
            ) : (
              <>
                <h5>Edytuj informacje o specjaliście</h5>
                <CustomInput labelText="Imię i nazwisko" value={fullName} />
                <CustomTextArea labelText="O mnie" value={aboutMe} />
                <div className="sideBarRight_buttonsContainer">
                  <CustomButton
                    role="confirmButton"
                    title="Zapisz"
                    onClick={() => saveTherapistData(fullName, aboutMe)}
                  ></CustomButton>
                  <CustomButton
                    role="withBorder"
                    title="Anuluj"
                    onClick={() => setIsEdited((prevState) => !prevState)}
                  ></CustomButton>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </div>
  );
}