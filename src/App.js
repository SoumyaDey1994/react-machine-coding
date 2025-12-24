import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import Chips from "./components/Chips/Chips";
import Home from "./components/Home/home";
import PaginationDemo from "./components/Pagination";
import ProgressBar from "./components/ProgresBar/ProgressBar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./components/Search";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/progress",
      element: <ProgressBar/>
    },
    {
      path: "/accordian",
      element: <Accordian/>
    },
    {
      path: "/chips",
      element: <Chips />
    },
    {
      path: "/pagination",
      element: <PaginationDemo />
    },
    {
      path: "/search",
      element: <Search />
    }
  ])

  return <RouterProvider router={appRouter} />
}

export default App;
