import * as actionType from "../action/actionTypes";

export const saveResult = (res) => {
   //let updatedResult = Number(res) * 2 ;
  return {
    type: actionType.STORE_RESULT,
    result: res,
  };
};

export const storeResult = (res) => (dispatch, getState) => {
  setTimeout(() => {
    const oldCounter = getState().ctr.counter;
    console.log('old',oldCounter);
    dispatch(saveResult(res));
  }, 2000);
};

export const deleteResult = (resElId) => ({
  type: actionType.DELETE_RESULT,
  elId: resElId,
});
