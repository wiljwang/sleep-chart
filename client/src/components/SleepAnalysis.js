import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const SleepAnalysis = () => {
  const { data } = useContext(GlobalContext);

  return (
    <>
      <h3>Sleep Analysis</h3>
      <div className="chart-container"></div>
    </>
  );
};
