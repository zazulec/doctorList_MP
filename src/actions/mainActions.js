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
    fetch(`${config.allTherapistsData}/${177}`, {
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