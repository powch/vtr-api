import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const GetSortedAssetData = ({ state, onData, onError, children }) => {
  const { isAuthenticated } = useAuth0();
  const { pagination, assetList, user, sortBy } = state;
  const { nextPage } = pagination || {};

  const url = `/api/assets/${1}/${sortBy}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => onData(res))
      .catch((err) => onError(err));
  });

  return children || null;
};

export default GetSortedAssetData;
