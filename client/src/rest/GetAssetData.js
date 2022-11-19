import React, { useEffect } from "react";

const GetAssetData = ({ state, onData, onError, children }) => {
  const { user } = state;

  const userId = user.sub.split("|")[1];

  const url = `/api/assets/${userId}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      body: {
        page: 1,
      },
    })
      .then((res) => res.json())
      .then((res) => onData(res))
      .catch((err) => onError(err));
  });

  return children || null;
};

export default GetAssetData;
