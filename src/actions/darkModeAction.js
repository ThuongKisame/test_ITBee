import * as actionTypes from "./actionType";
export const changeDarkMode = (value) => ({
  type: actionTypes.CHANGE_DARK_MODE,
  payload: value,
});
