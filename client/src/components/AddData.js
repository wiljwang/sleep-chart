import React, { useContext, useState } from "react";

import { GlobalContext } from "../context/GlobalState";

export const AddData = () => {
  const [starts, setStarts] = useState(0);
  const [ends, setEnds] = useState(0);

  const { addDatum, isAuthenticated } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (starts < ends) {
      const newDatum = {
        starts,
        ends,
      };
      addDatum(newDatum);
    }
  };

  return (
    <>
      <h3>Add Data</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="datetime-local">Starts</label>
          <input
            type="datetime-local"
            value={starts}
            onChange={(e) => setStarts(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="datetime-local">Ends</label>
          <input
            type="datetime-local"
            value={ends}
            onChange={(e) => setEnds(e.target.value)}
          />
        </div>
        {isAuthenticated ? (
          <button className="btn">Add</button>
        ) : (
          <h4 className="mb-3 ml-4">please log in to manage items</h4>
        )}
      </form>
    </>
  );
};
