import React, { useEffect } from "react";

const GetAssetData = ({ state, onData, onError, children }) => {
  const { pagination, assetList } = state;
  const { nextPage } = pagination || {};

  const url = `/api/assets/`;
  const body = JSON.stringify({ page: assetList.length ? nextPage : 1 });

  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((res) => onData(res))
      .catch((err) => onError(err));
  });

  return children || null;
};

export default GetAssetData;
