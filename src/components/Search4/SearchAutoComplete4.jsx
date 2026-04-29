import { useEffect, useRef, useState } from "react";
import "./search4.css";

export const SearchAutoComplete4 = () => {
  const inputRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cachedResponse, setCachedResponse] = useState({});

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!searchInput.trim()) return;
    // debounce effect, gap of 300 ms
    const timer = setTimeout(() => fetchResults(), 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const fetchResults = async () => {
    const searchStr = searchInput.trim();
    if (cachedResponse[searchStr]) {
      setSearchResult(cachedResponse[searchStr]);
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${searchStr}`,
      );
      const data = await res.json();
      const products = data?.products;
      cachedResponse[searchStr] = products;
      setSearchResult(products);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="root-conatiner">
      <h1>Auto-Complete Search Bar</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Enter Product Name"
        ref={inputRef}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {!isLoading && searchInput && searchResult.length === 0 && (
        <p>No Results found against {searchInput} </p>
      )}
      {searchInput && searchResult.length > 0 && (
        <div className="search-result-container">
          {!isLoading &&
            searchResult.map((result) => {
              return <p key={result.id}>{result?.title}</p>;
            })}
        </div>
      )}
    </div>
  );
};
