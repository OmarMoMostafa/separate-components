import React, { useState } from "react";

function TipCalc() {
  const [bill, setBill] = useState(0);
  const [rating, setRating] = useState(0);
  const tip = Math.round((rating / 100) * bill);
  return (
    <div>
      <label htmlFor="bill">How much was the bill?</label>
      <input
        type="text"
        id="bill"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <br />
      <label htmlFor="rating">How did you like the service?</label>
      <select
        id="rating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value="0">not good (0%)</option>
        <option value="5">good (5%)</option>
        <option value="10">very good (10%)</option>
      </select>

      <h1>
        you pay {bill + tip} ({bill}$ + {tip}$ tip)
      </h1>
      <button
        onClick={() => {
          setBill(0);
          setRating(0);
        }}
      >
        reset
      </button>
    </div>
  );
}

export default TipCalc;
