import { ProductItem } from "./ProductItem";

const COLUMN_COUNT = 6;

export const ProductCell = ({ columnIndex, rowIndex, style, products }) => {
  const index = rowIndex * COLUMN_COUNT + columnIndex;

  if (index >= products.length) return null;

  const product = products[index];

  return (
    <div style={{ ...style, padding: 10, margin: "auto", boxSizing: "border-box" }}>
      <ProductItem item={product} />
    </div>
  );
};
