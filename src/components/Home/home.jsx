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
      </div>
    </div>
  );
};

export default Home;
