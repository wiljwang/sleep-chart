import React, { useContext, useEffect } from "react";
import { Datum } from "./Datum";

import { GlobalContext } from "../context/GlobalState";

export const AllRecordedData = () => {
  const { data, getData } = useContext(GlobalContext);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>All Recorded Data</h3>
      <ul className="list">
        {data.map((datum) => (
          <Datum key={datum._id} datum={datum} />
        ))}
      </ul>
    </>
  );
};
