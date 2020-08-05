import React, { useContext } from "react";
import toHrMin from "../utils/toHrMin";

import { GlobalContext } from "../context/GlobalState";

export const Datum = ({ datum }) => {
  const { deleteDatum, isAuthenticated } = useContext(GlobalContext);

  const startDate = Date.parse(datum.starts);
  const endDate = Date.parse(datum.ends);

  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <li>
      {dateTimeFormat.formatRange(startDate, endDate)}
      <span>{toHrMin(endDate - startDate)}</span>
      {isAuthenticated ? (
        <button onClick={() => deleteDatum(datum._id)} className="delete-btn">
          x
        </button>
      ) : null}
    </li>
  );
};
