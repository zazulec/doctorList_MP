import config from "../config.json";

export const fetchTherapistsData = () => {
  return (dispatch) => {
    fetch(config.allTherapistsData, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ citySeoName: "ONLINE" }),
    })
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_ALL_THERAPISTS", data: data.therapists })
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};
export const fetchSingleTherapistData = (id) => {
  return (dispatch) => {
    fetch(`${config.allTherapistsData}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_SINGLE_THERAPIST", data }))
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const saveEditedTherapistInfo = (fullName, aboutMe, singleTherapistId) => {
  let editedData = { fullName, aboutMe, singleTherapistId };
  return (dispatch) => dispatch({ type: "SAVE_EDITED_THERAPIST_INFO", data: editedData });
};

export const deleteTherapistData = (id) => {
  return (dispatch) => dispatch({ type: "DELETE_THERAPIST_DATA", data: id });
};

export const eraseTherapistInfo = () => {
  return (dispatch) => dispatch({ type: "ERASE_THERAPIST_INFO" });
};
