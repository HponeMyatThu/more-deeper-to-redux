import * as actionType from '../Store/action'

const initialState = {
  counter: 0,
  result: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionType.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionType.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionType.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case actionType.STORE_RESULT:
      return (
        {
          ...state,
          result: state.result.concat({ id: new Date(), value: state.counter }),
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
