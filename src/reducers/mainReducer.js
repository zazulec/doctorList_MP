const initState = {};

const mainReducer = (state = initState, action) => {
  let newState = state;
  switch (action.type) {
    case "FETCH_ALL_THERAPISTS":
      newState = {
        ...state,
        allTherapists: action.data,
      };
      break;
    default:
      return state;
  }
  return newState;
};

export default mainReducer;
