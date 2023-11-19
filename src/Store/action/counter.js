import * as actionType from "../action/actionTypes";

export const increment = () => ({
  type: actionType.INCREMENT,
});

export const decrement = () => ({
  type: actionType.DECREMENT,
});

export const add = (value) => ({
  type: actionType.ADD,
  value: value,
});

export const subtract = (value) => ({
  type: actionType.SUBTRACT,
  value: value,
});
