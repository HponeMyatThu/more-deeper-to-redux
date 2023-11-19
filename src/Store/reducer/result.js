import * as actionType from "../action/actionTypes";

import { updateObject } from "../utility";

const initialState = {
  result: [],
};

const deleteResult = (state, action) => {
  const updateArray = state.result.filter(
    (result) => result.id !== action.elId
  );
  return updateObject(state, { result: updateArray });
};

const storeResult = (state, action) => {
  const storeArray = state.result.concat({
    id: new Date(),
    value: action.result * 2,
  });
  return updateObject(state, { result: storeArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT: return storeResult(state, action);
    case actionType.DELETE_RESULT: return deleteResult(state, action);
    default:
      return state;
  }
};

export default reducer;
