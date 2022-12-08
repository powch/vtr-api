import { INITIAL, ASSET_LIST_LOADING, ASSET_LIST } from "./constants";

export const initialState = {
  currentPage: INITIAL,
  user: null,
  assetList: [],
  selectedAssetId: null,
};

export const reducer = (state, data) => {
  const { action, payload } = data;

  if (action.includes("CHANGE_PAGE")) {
    return {
      ...state,
      currentPage: payload,
    };
  }

  if (action.includes("SEED_USER_DATA")) {
    return {
      ...state,
      user: {
        ...payload.user,
        role: payload.permissions.find(
          (permission) => permission === "access:dashboard"
        )
          ? "admin"
          : "user",
      },
      ...(payload.currentPage === INITIAL
        ? { currentPage: ASSET_LIST_LOADING }
        : {}),
    };
  }

  if (action.includes("SEED_ASSET_DATA")) {
    const isAuthenticated = payload?.isAuthenticated;
    const { docs, ...pagination } = payload?.assetData || payload;
    const { id, contributions, favorites } = payload?.userData || {};

    return {
      ...state,
      currentPage: ASSET_LIST,
      assetList: [...state?.assetList, ...docs],
      pagination,
      ...(isAuthenticated
        ? {
            user: {
              ...state.user,
              id,
              contributions,
              favorites,
            },
          }
        : {}),
    };
  }

  if (action.includes("SELECT_ASSET_TO_VIEW")) {
    return {
      ...state,
      selectedAssetId: payload,
    };
  }

  // ADD AN ERROR STATE, YOU TROGLODYTE
  if (action.includes("ERROR")) {
  }

  return state;
};
