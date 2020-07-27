import React, { useContext } from "react";
import toHrMin from "../toHrMin";

import { GlobalContext } from "../context/GlobalState";

export const AsleepAverage = () => {
  const { data } = useContext(GlobalContext);

  const milliseconds = data.map(
    (datum) => Date.parse(datum.ends) - Date.parse(datum.starts)
  );
  const total = milliseconds.reduce((acc, item) => (acc += item), 0);
  const average =
    total === 0
      ? "0hr 0min"
      : toHrMin((total / milliseconds.length).toFixed(0));

  return (
    <>
      <h4>Asleep Average</h4>
      <h1>{average}</h1>
    </>
  );
};
