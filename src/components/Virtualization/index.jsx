import { useEffect, useState } from "react";
import "./index.css";
import { Grid } from "react-window";
import { ProductCell } from "./ProductCell";

const COLUMN_COUNT = 6;
const COLUMN_WIDTH = 250;
const ROW_HEIGHT = 250;
const VISIBLE_ROWS = 3;

export const VirtualizedList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=500");
    const data = await response.json();
    const products = data.products || [];
    setProducts(products);
  };

  const rowCount = Math.ceil(products.length / COLUMN_COUNT);

  return (
    <div className="container">
      <h1>Virtualized List</h1>
      {products.length > 0 && (
        <Grid
          overscanRowCount={0}
          overscanColumnCount={0}
          columnCount={COLUMN_COUNT}
          rowCount={rowCount}
          columnWidth={COLUMN_WIDTH}
          rowHeight={ROW_HEIGHT}
          height={ROW_HEIGHT * VISIBLE_ROWS}
          width={COLUMN_WIDTH * COLUMN_COUNT}
          cellComponent={ProductCell}
          cellProps={{ products }}
          className="product-container"
        />
      )}
    </div>
  );
};
