import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to React Machine Coding Playground !!</h1>
      <div className={styles.container}>
        <button className={styles.navigation}>
          <Link to={"/progress"} target="_blank" rel="noopener noreferrer">
            Progress Bar
          </Link>
        </button>
        <button className={styles.navigation}>
          <Link to={"/accordian"} target="_blank" rel="noopener noreferrer">
            Accordian
          </Link>
        </button>
        <button className={styles.navigation}>
          <Link to={"/chips"} target="_blank" rel="noopener noreferrer">
            Chips Input
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/pagination"} target="_blank" rel="noopener noreferrer">
            Pagination
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/search"} target="_blank" rel="noopener noreferrer">
            Search Autocomplete
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/otp"} target="_blank" rel="noopener noreferrer">
            OTP
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/checkbox"} target="_blank" rel="noopener noreferrer">
            Nested Checkbox
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/explorer"} target="_blank" rel="noopener noreferrer">
            File Explorer
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/todo"} target="_blank" rel="noopener noreferrer">
            Todo List
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/tabs"} target="_blank" rel="noopener noreferrer">
            Tabs Component
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/progress-2"} target="_blank" rel="noopener noreferrer">
            Progres Bar 2
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/nested-checkbox"} target="_blank" rel="noopener noreferrer">
            Nested Checkbox 2
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/otp-input-2"} target="_blank" rel="noopener noreferrer">
            OTP Input 2
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/search-autocomplete"} target="_blank" rel="noopener noreferrer">
            Search Autocomplete 2
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/file-explorer-2"} target="_blank" rel="noopener noreferrer">
            File Explorer 2
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/tabs-2"} target="_blank" rel="noopener noreferrer">
            Tabs Component 2
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/accordian-2"} target="_blank" rel="noopener noreferrer">
            Accordian 2
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/todo-list-2"} target="_blank" rel="noopener noreferrer">
            Todo List 2
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/chips-input-2"} target="_blank" rel="noopener noreferrer">
            Chips Input 2
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/pagination-2"} target="_blank" rel="noopener noreferrer">
            Pagination 2
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/virtualized-list"} target="_blank" rel="noopener noreferrer">
            Virtualization with Grid
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/nested-checkbox-3"} target="_blank" rel="noopener noreferrer">
            Nested Checkbox 3
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/otp-input-3"} target="_blank" rel="noopener noreferrer">
            OTP Input 3
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/todo-list-3"} target="_blank" rel="noopener noreferrer">
            ToDo List 3
          </Link>
        </button>

        <button className={styles.navigation}>
          <Link to={"/tabs-3"} target="_blank" rel="noopener noreferrer">
            Tabs Component 3
          </Link>
        </button>

      </div>
    </div>
  );
};

export default Home;
