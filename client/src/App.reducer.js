import set from "lodash.set";

import {
  PAGE_LOGIN,
} from "./constants";

export const initialState = {
  currentPage: PAGE_LOGIN,
  user: null,
};

export const reducer = (state, data) => {
  const { action, payload } = data;

  // ADD AN ERROR STATE, YOU TROGLODYTE

  return state;
};
