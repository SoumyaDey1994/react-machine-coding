import React, { useEffect, useState } from "react";
import "./index.css";

const Search = () => {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);
  const [savedData, setSavedData] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(fetchRecords, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const fetchRecords = async () => {
    if (savedData[input]) {
      // console.log(`Cached Response`);
      setProducts(savedData[input]);
      return;
    }

    // console.log(`API Call`);
    const response = await fetch(
      "https://dummyjson.com/products/search?q=" + input
    );
    const data = await response.json();
    setProducts(data.products);
    setSavedData((prev) => ({
      ...prev,
      [input]: data.products,
    }));
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="search-container">
      <h1>Autocomplete Search Bar</h1>
      <input
        type="text"
        className="search-input"
        value={input}
        onChange={(e) => handleInputChange(e)}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
      {products.length === 0 && <div>No Results Found</div>}
      {products.length > 0 && showResults && (
        <div className="suggestion-container">
          {products.map((product) => (
            <div key={product.id} className="item">
              {product.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
