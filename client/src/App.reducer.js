import {
  INITIAL,
  ASSET_LIST_LOADING,
  ASSET_LIST,
  ASSET_LIST_UPDATE_SORT_ORDER,
  ASSET_INFO,
} from "./constants";

export const initialState = {
  currentPage: INITIAL,
  user: null,
  assetList: [],
  selectedAssetId: null,
  sortBy: "dateAdded",
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
    const { id, contributions, favorites, likes } = payload?.userData || {};

    return {
      ...state,
      currentPage: ASSET_LIST,
      assetList: [...state?.assetList, ...docs],
      pagination,
      ...(isAuthenticated && payload?.userData
        ? {
            user: {
              ...state.user,
              id,
              contributions,
              favorites,
              likes,
            },
          }
        : {}),
    };
  }

  if (action.includes("UPDATE_SORT_ORDER")) {
    const isFavorite = payload.sortBy === "favorites";

    return {
      ...state,
      sortBy: payload.sortBy,
      ...(isFavorite
        ? { assetList: state.user.favorites }
        : { currentPage: ASSET_LIST_UPDATE_SORT_ORDER }),
    };
  }

  if (action.includes("SORT_ORDER_UPDATED")) {
    const { docs, ...pagination } = payload;

    return {
      ...state,
      assetList: docs,
      pagination,
      currentPage: ASSET_LIST,
    };
  }

  if (action.includes("UPDATE_USER_ASSET_DATA")) {
    const { userData } = payload;
    const { contributions, favorites, likes } = userData;

    return {
      ...state,
      user: {
        ...state.user,
        contributions,
        favorites,
        likes,
      },
    };
  }

  if (action.includes("UPDATE_LIKES")) {
    const updatedLikes = payload.isAssetLiked
      ? state.user.likes.filter((id) => id !== state.selectedAssetId)
      : [...state.user.likes, state.selectedAssetId];

    return {
      ...state,
      user: {
        ...state.user,
        likes: updatedLikes,
      },
    };
  }

  if (action.includes("SELECT_ASSET_TO_VIEW")) {
    return {
      ...state,
      selectedAssetId: payload,
      currentPage: ASSET_INFO,
    };
  }

  // ADD AN ERROR STATE, YOU TROGLODYTE
  if (action.includes("ERROR")) {
  }

  return state;
};
