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
        allTherapists: action.data,
      };
      break;
    case "FETCH_SINGLE_THERAPIST":
      newState = {
        ...state,
        singleTherapist: action.data,
      };
      break;
    case "SAVE_EDITED_THERAPIST_INFO":
      let { fullName, aboutMe } = action.data;
      // newState = {
      //   ...state,
      //   singleTherapist: action.data,
      // };
      break;
    case "DELETE_THERAPIST_DATA":
      const findTherapistDataToRemove = state.allTherapists.findIndex(
        (e) => e.id === action.data
      );
      function deleteDataInArrayWhenFindIndexInAllTherapist() {
        if (findTherapistDataToRemove !== -1) {
          let newAllTherapists = [...state.allTherapists];
          newAllTherapists.splice(findTherapistDataToRemove, 1);
          return newAllTherapists;
        } else {
          return state.filteredAndSortedItems;
        }
      }
      const newAllItemsData = deleteDataInArrayWhenFindIndexInAllTherapist();
      newState = {
        ...state,
        filteredAndSortedItems: newAllItemsData,
      };
      // newState = {
      //   ...state,
      //   singleTherapist: action.data,
      // };
      break;
    case "ERASE_THERAPIST_INFO":
      newState = {
        ...state,
        singleTherapist: null,
      };
      break;
    default:
      return state;
  }
  return newState;
};

export default mainReducer;
