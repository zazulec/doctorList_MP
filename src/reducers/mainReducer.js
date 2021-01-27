const initState = {
  allTherapists: null,
  singleTherapist: null
};

const mainReducer = (state = initState, action) => {
  let newState = state;
  switch (action.type) {
    case "FETCH_ALL_THERAPISTS":
      let array = action.data;
      const chunkArray = (arr, size) =>
        arr.length > size
          ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
          : [arr];
      newState = {
        ...state,
        allTherapists: chunkArray(array, 9),
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