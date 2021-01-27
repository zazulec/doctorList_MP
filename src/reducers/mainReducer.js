const initState = {
  allTherapists: null,
  singleTherapist: null
};

const mainReducer = (state = initState, action) => {
  let newState = state;
  switch (action.type) {
    case "FETCH_ALL_THERAPISTS":
      newState = {
        ...state,
        allTherapists: action.data
      };
      break;
    case "FETCH_SINGLE_THERAPIST":
      newState = {
        ...state,
        singleTherapist: action.data,
      };
      break;
    default:
      return state;
  }
  return newState;
};

export default mainReducer;
