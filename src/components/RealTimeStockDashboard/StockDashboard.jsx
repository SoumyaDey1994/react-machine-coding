import React from "react";
import { useStockStream } from "./useStockStream";
import StockList from "./StockList";
import "./stockDashboard.css";

export default function StockDashboard() {
  const stocks = useStockStream();
  // console.log(`Refreshing Stock Dashboard`);
  return (
    <div className="root-container">
      <h2>Stock Dashboard</h2>
      <StockList stocks={stocks} />
    </div>
  );
}
