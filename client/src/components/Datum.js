import React, { useContext } from "react";
import toHrMin from "../toHrMin";

import { GlobalContext } from "../context/GlobalState";

export const Datum = ({ datum }) => {
  const { deleteDatum } = useContext(GlobalContext);

  const startDate = Date.parse(datum.starts);
  const endDate = Date.parse(datum.ends);

  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const parts = dateTimeFormat.formatRange(startDate, endDate);

  return (
    <li>
      {parts}
      <span>{toHrMin(endDate - startDate)}</span>
      <button onClick={() => deleteDatum(datum.id)} className="delete-btn">
        x
      </button>
    </li>
  );
};
