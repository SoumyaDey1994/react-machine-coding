import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import Chips from "./components/Chips/Chips";
import Home from "./components/Home/home";
import PaginationDemo from "./components/Pagination";
import ProgressBar from "./components/ProgresBar/ProgressBar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./components/Search";
import { OtpInput } from "./components/Otp";
import { NestedCheckbox } from "./components/CheckBox";
import { FileExplorer } from "./components/FileExplorer";
import { ToDoList } from "./components/ToDoList";
import { TabForm } from "./components/TabForm";
import { OtpInput22012026 } from "./components/Otp/otp22012026";
import { FileExplorer26012026 } from "./components/FileExplorer/fileExplorer26012026";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/progress",
      element: <ProgressBar />,
    },
    {
      path: "/accordian",
      element: <Accordian />,
    },
    {
      path: "/chips",
      element: <Chips />,
    },
    {
      path: "/pagination",
      element: <PaginationDemo />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/otp",
      // element: <OtpInput />,
      element: <OtpInput22012026 />,
    },
    {
      path: "/checkbox",
      element: <NestedCheckbox />,
    },
    {
      path: "/explorer",
      // element: <FileExplorer />
      element: <FileExplorer26012026 />
    },
    {
      path: "/todo",
      element: <ToDoList />
    },
    {
      path: "/tabs",
      element: <TabForm />
    }
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
