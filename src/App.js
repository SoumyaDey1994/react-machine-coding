import "./App.css";
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
    }
  ])

  return <RouterProvider router={appRouter} />
}

export default App;
