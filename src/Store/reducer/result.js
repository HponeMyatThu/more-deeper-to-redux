import * as actionType from '../action'

const initialState = {
  result: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return (
        {
          ...state,
          result: state.result.concat({ id: new Date(), value: action.result }),
        } || []
      );
    case actionType.DELETE_RESULT:
        const updateArray = state.result.filter(result => result.id !== action.elId)
        return{
            ...state,
            result: updateArray
        }
    default:
      return state;
  }
};

export default reducer;
