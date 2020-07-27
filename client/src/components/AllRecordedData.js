import React, { useContext } from "react";
import { Datum } from "./Datum";

import { GlobalContext } from "../context/GlobalState";

export const AllRecordedData = () => {
  const { data } = useContext(GlobalContext);

  return (
    <>
      <h3>All Recorded Data</h3>
      <ul className="list">
        {data.reverse().map((datum) => (
          <Datum key={datum.id} datum={datum} />
        ))}
      </ul>
    </>
  );
};
