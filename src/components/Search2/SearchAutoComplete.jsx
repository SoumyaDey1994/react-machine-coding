import { useEffect, useState } from "react";
import "./search.css";

export const SearchAutoComplete = () => {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [savedResult, setSavedResult] = useState({});

  useEffect(() => {
    const timer = setTimeout(fetchData, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const fetchData = async () => {
    if (searchInput.trim() === "") {
      setProducts([]);
      return;
    }

    if (savedResult[searchInput]) {
      setProducts(savedResult[searchInput]);
      return;
    }

    const res = await fetch(
      `https://dummyjson.com/products/search?q=${searchInput}`,
    );
    const data = await res.json();
    const products = data?.products;
    setProducts(products);

    setSavedResult((prev) => ({
      ...prev,
      [searchInput]: products,
    }));
  };

  const handleSearchInput = (event) => {
    const inputVal = event.target.value;
    setSearchInput(inputVal);
  };

  return (
    <div className="container">
      <h1>Search Autocomplete</h1>
      <input
        type="text"
        value={searchInput}
        placeholder="Seach here"
        className="search-input"
        onChange={(e) => handleSearchInput(e)}
      />
      {searchInput && products.length === 0 && <p>No Results Found</p>}
      {products.length > 0 && (
        <div className="search-result">
          {products.map((product) => {
            return (
              <div key={product.id} className="item">
                <span>{product.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
