const initState = {
    allTherapists: []
};

const mainReducer = (state = initState, action) => {
  let newState = state;
  switch (action.type) {
    case "FETCH_ALL_THERAPISTS":
      let chunk;
      let sortedData = [];
      while (action.data.length > 0) {
        chunk = action.data.splice(0, 9);
        sortedData.push(chunk);
      }
      newState = {
        ...state,
        allTherapists: sortedData,
      };
      break;
    default:
      return state;
  }
  return newState;
};

export default mainReducer;
