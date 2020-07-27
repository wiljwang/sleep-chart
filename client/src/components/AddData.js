import React, { useContext, useState } from "react";

import { GlobalContext } from "../context/GlobalState";

import { v4 as uuidv4 } from "uuid";

export const AddData = () => {
  const [starts, setStarts] = useState(0);
  const [ends, setEnds] = useState(0);

  const { addDatum } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newDatum = {
      id: uuidv4(),
      starts,
      ends,
    };

    addDatum(newDatum);
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
        <button className="btn">Add</button>
      </form>
    </>
  );
};
