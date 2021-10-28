import { createStore } from "redux";

const intialState = { counter: 0, showCounter: true };

const countReducer = (state = intialState, action) => {
  if (action.type === "INC")
    return {
      ...state,
      counter: state.counter + 1,
    };
  if (action.type === "DEC")
    return {
      ...state,
      counter: state.counter - 1,
    };
  if (action.type === "INC5")
    return {
      ...state,
      counter: state.counter + action.value,
    };
  if (action.type === "toggle")
    return {
      ...state,
      showCounter: !state.showCounter,
    };

  return state;
};

const store = createStore(countReducer);

export default store;
