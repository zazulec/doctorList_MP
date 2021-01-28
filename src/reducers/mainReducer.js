const initState = {
  allTherapists: null,
  singleTherapist: null,
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
      let { fullName, aboutMe, singleTherapistId } = action.data;
      const findTherapistToUpdate = state.allTherapists.findIndex(
        (e) => e.therapistId === singleTherapistId
      );

      let newAllTherapists = [...state.allTherapists];

      let updatedTherapistData = state.allTherapists[findTherapistToUpdate];
      updatedTherapistData.aboutMe = aboutMe;
      updatedTherapistData.fullName = fullName;
      newAllTherapists[findTherapistToUpdate] = updatedTherapistData;

      newState = {
        ...state,
        newAllTherapists: newAllTherapists,
      };
      break;
    case "DELETE_THERAPIST_DATA":
      const findTherapistDataToRemove = state.allTherapists.findIndex(
        (e) => e.therapistId === action.data
      );
      function deleteDataInArrayWhenFindIndexInAllTherapist() {
        if (findTherapistDataToRemove !== -1) {
          let newAllTherapists = [...state.allTherapists];
          newAllTherapists.splice(findTherapistDataToRemove, 1);
          return newAllTherapists;
        } else {
          return state.newAllTherapists;
        }
      }
      const newAllItemsData = deleteDataInArrayWhenFindIndexInAllTherapist();
      newState = {
        ...state,
        allTherapists: newAllItemsData,
      };
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
