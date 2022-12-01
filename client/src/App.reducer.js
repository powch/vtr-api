import set from "lodash.set";

import { PAGE_LOGIN } from "./constants";

export const initialState = {
  currentPage: PAGE_LOGIN,
  user: null,
};

export const reducer = (state, data) => {
  const { action, payload } = data;

  if (action.includes("SEED_USER_DATA")) {
    console.log({ action, payload });
  }

  // ADD AN ERROR STATE, YOU TROGLODYTE

  return state;
};
