import { useEffect, useState } from "react";
import "./pagination3.css";

const PAGE_SIZE = 10;

export const Pagination3 = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currPage, setCurrPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    getAllRecipies();
  }, []);

  const getAllRecipies = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/recipes?limit=100");
      const data = await response.json();
      const recipes = data?.recipes;

      const totalItems = data.total;
      const totalPages = Math.ceil(totalItems / PAGE_SIZE);
      setPageCount(totalPages);
      setRecipes(recipes);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (recipes.length === 0) return;

  return (
    <div className="root-container">
      <h1>Pagination 3 with Recipe List</h1>
      {isLoading && <h3>Loading...</h3>}
      {pageCount > 0 && (
        <div className="page-container">
          {
            <button
              className="nav-btn"
              disabled={currPage === 0}
              onClick={() => setCurrPage((prev) => prev - 1)}
            >
              {"⬅️"}
            </button>
          }
          {[...new Array(pageCount)].map((_, idx) => {
            return (
              <button
                key={idx}
                className={`page-btn ${idx === currPage ? "active-btn" : ""}`}
                onClick={() => setCurrPage(idx)}
              >
                {idx + 1}
              </button>
            );
          })}
          {
            <button
              className="nav-btn"
              disabled={currPage === pageCount - 1}
              onClick={() => setCurrPage((prev) => prev + 1)}
            >
              {"➡️"}
            </button>
          }
        </div>
      )}
      {recipes.length > 0 && (
        <div className="item-container">
          {recipes.slice(currPage, currPage + PAGE_SIZE).map((rec) => {
            return (
              <div className="recipy-item" key={rec.id}>
                <img src={rec.image} alt={rec.name} width={"150px"} />
                <h3>{rec.name}</h3>
                <p>{rec.rating}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
