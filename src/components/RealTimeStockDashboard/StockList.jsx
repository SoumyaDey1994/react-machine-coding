import React from "react";
import StockRow from "./StockRow";

export default function StockList({ stocks }) {
  return (
    <div className="stock-list">
      {stocks.map((stock) => (
        <StockRow key={stock.id} stock={stock} />
      ))}
    </div>
  );
}
