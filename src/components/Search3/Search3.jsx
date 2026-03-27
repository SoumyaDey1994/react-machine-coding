import { useEffect, useState } from "react";
import "./search3.css";

export const SearchAutoComplete3 = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [cachedResult, setCachedResult] = useState({});

  useEffect(() => {
    const timer = setTimeout(getSearchResults, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchResults = async () => {
    const finalSearchText = searchText.trim();

    if (cachedResult[finalSearchText]) {
      setSearchResult(cachedResult[finalSearchText]);
      return;
    }

    const response = await fetch(
      "https://dummyjson.com/recipes/search?q=" + finalSearchText,
    );
    const data = await response.json();
    const recipes = data?.recipes;
    setCachedResult((prev) => ({ ...prev, [finalSearchText]: recipes }));
    setSearchResult(recipes);
  };

  return (
    <div className="container">
      <h1>Search Autocomplete 3</h1>
      <div className="search-conatiner">
        <input
          type="text"
          className="search-bar"
          value={searchText}
          placeholder="Enter Recipie"
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText && searchResult?.length === 0 && <p>No Results Found</p>}
        {searchText && searchResult?.length > 0 && (
          <div className="search-result">
            {searchResult?.map((result) => {
              return <p key={result.id}>{result.name}</p>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
