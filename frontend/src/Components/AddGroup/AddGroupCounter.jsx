import React, { useState } from "react";
import "../../sass/styles.scss";

const AddGroupCounter = ({ updateMembersNames }) => {
  const [counter, setCounter] = useState(1);
  const [array, setArray] = useState([0]);
  const [names, setNames] = useState([""]);

  const handleSpan = (e) => {
    e.preventDefault();
    let tempArr = [...array];
    if (e.currentTarget.innerText === "+") {
      setCounter(counter + 1);
      tempArr = Array.from({ length: counter + 1 }, (v, k) => k);
    }
    if (e.currentTarget.innerText === "-" && counter !== 1) {
      setCounter(counter - 1);
      tempArr = Array.from({ length: counter - 1 }, (v, k) => k);
    }
    setArray(tempArr);
  };

  const handleNameUpdate = (e, indx) => {
    let updatedNames = [...names];
    updatedNames[indx] = e.target.value;
    setNames(updatedNames);
    updateMembersNames(updatedNames);
  };

  return (
    <div>
      <div className="counter">
        <button className="btn btn-primary" onClick={handleSpan}>
          -
        </button>
        <span>{counter}</span>
        <button className="btn btn-primary" onClick={handleSpan}>
          +
        </button>
      </div>
      {array.map((indx) => (
        <div key={indx} className="listOfMembers">
          <input
            id="names"
            type="text"
            placeholder="Enter Name"
            className="form-control"
            onChange={(e) => handleNameUpdate(e, indx)}
          />
        </div>
      ))}
    </div>
  );
};

export default AddGroupCounter;
