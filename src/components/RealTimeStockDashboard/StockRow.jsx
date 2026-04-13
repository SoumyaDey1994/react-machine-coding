import React from "react";

function StockRow({ stock }) {
  return (
    <div style={{ padding: "5px", margin: "5px", border: "1px solid grey" }}>
      <span>
        <strong>{stock.id}</strong>
      </span>{" "}
      <span> ----→ </span>
      <span>${stock.price}</span>
    </div>
  );
}

export default React.memo(StockRow);
