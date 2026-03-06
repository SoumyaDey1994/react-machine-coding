import { useEffect, useState } from "react";
import "./pagination2.css";

const PAGE_SIZE = 15;

export const Pagination2 = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getProducts();
    setActivePage(0);
  }, []);

  useEffect(() => {
    const pageOffset = activePage * PAGE_SIZE;
    setVisibleProducts(products.slice(pageOffset, pageOffset + PAGE_SIZE));
  }, [activePage]);

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=500");
    const data = await response.json();
    const products = data?.products || [];
    const noOfProducts = products.length;
    setProducts(products);
    setVisibleProducts(products.slice(activePage, activePage + PAGE_SIZE));
    setPageCount(Math.ceil(noOfProducts / PAGE_SIZE));
  };

  return (
    <div className="container">
      <h1>Pagination 2</h1>
      <div className="pagination-container">
        {pageCount > 1 && (
          <button
            className="navigation-btn"
            disabled={activePage === 0}
            onClick={() => setActivePage(activePage - 1)}
          >
            {"⬅️"}
          </button>
        )}
        {[...new Array(pageCount)].map((_, idx) => {
          return (
            <button
              key={idx}
              className={`${idx === activePage ? "page-no-btn active-page-btn" : "page-no-btn"}`}
              onClick={() => setActivePage(idx)}
            >
              {idx + 1}
            </button>
          );
        })}
        {pageCount > 1 && (
          <button
            className="navigation-btn"
            disabled={activePage === pageCount - 1}
            onClick={() => setActivePage(activePage + 1)}
          >
            {"➡️"}
          </button>
        )}
      </div>
      {visibleProducts.length > 0 && (
        <div className="product-container">
          {visibleProducts.map((product) => {
            return (
              <div className="product" key={product.id}>
                <img
                  src={product.thumbnail || product.image}
                  width={"150px"}
                  alt={product.title || product.name}
                />
                <p>{product.title || product.name}</p>
                <p>
                  $ <strong>{product.price}</strong>
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
