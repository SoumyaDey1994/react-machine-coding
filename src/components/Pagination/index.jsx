import React, { useEffect, useState } from "react";
import "./index.css";

const PaginationDemo = () => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageOffset, setPageOffset] = useState(0);
  const [activePage, setActivePage] = useState(0);

  const PAGE_SIZE = 10;

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=200");
    const data = await res.json();

    const noOfPages = Math.ceil(data.products.length / PAGE_SIZE);
    setProducts(data.products);
    setPageCount(noOfPages);
  };

  const handleBtnClick = (pageIndex) => {
    setPageOffset(pageIndex * PAGE_SIZE);
    setActivePage(pageIndex);
  };

  const handlePageShiftBtn = (isLeft=true) => {
    const newActivePage = isLeft ? (activePage - 1) : (activePage + 1);
    setPageOffset(newActivePage * PAGE_SIZE);
    setActivePage(newActivePage);
  };

  if (products.length === 0) return;

  return (
    <div className="container">
      <h1>Pagination Demo</h1>
      <h2>Products</h2>
      <div className="pagination-container">
        <button className={`shiftPage`} disabled={activePage === 0} onClick={() => handlePageShiftBtn(true)}>
          {"⬅️"}
        </button>
        {[...Array(pageCount)].map((_, i) => (
          <button
            key={i}
            className={`pageNo ${activePage === i ? "active" : ""} `}
            onClick={() => handleBtnClick(i)}
          >
            {i + 1}
          </button>
        ))}
        <button className={`shiftPage`} disabled={activePage === pageCount-1} onClick={() => handlePageShiftBtn(false)}>
          {"➡️"}
        </button>
      </div>
      <div className="product-container">
        {products.slice(pageOffset, pageOffset + PAGE_SIZE).map((product) => {
          return (
            <div key={product.id} className="product-item">
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaginationDemo;
