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
