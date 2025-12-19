import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import Chips from "./components/Chips/Chips";
import Home from "./components/Home/home";
import ProgressBar from "./components/ProgresBar/ProgressBar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    }
  ])

  return <RouterProvider router={appRouter} />
}

export default App;
