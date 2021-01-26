const initState = {};

const mainReducer = (state = initState, action) => {
  let newState = state;
  switch (action.type) {
    case "HELLO":
      newState = {
        ...state,
        hello: "hello",
      };
      break;
    default:
      return state;
  }
};

export default mainReducer;
