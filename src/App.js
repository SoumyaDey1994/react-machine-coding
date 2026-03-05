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
import { ProgressBar2 } from "./components/ProgressBar2/progressBar2";
import { SearchAutoComplete } from "./components/Search2/SearchAutoComplete";
import { NestedCheckbox as NestedCheckbox2 } from "./components/NestedCheckbox/NestedCheckbox";
import { Otp2 } from "./components/Otp2/Otp2";
import { FileExplorer2 } from "./components/FileExplorer2/FileExplorer";
import { TabForm2 } from "./components/TabForm2/TabForm";
import { Accordian2 } from "./components/Accordian2/Accordian2";
import { ToDo2 } from "./components/ToDoList2/todo2";
import { ChipsInput2 } from "./components/Chips2/ChipsInput2";

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
      element: <FileExplorer26012026 />,
    },
    {
      path: "/todo",
      element: <ToDoList />,
    },
    {
      path: "/tabs",
      element: <TabForm />,
    },
    {
      path: "/progress-2",
      element: <ProgressBar2 />,
    },
    {
      path: "/search-autocomplete",
      element: <SearchAutoComplete />,
    },
    {
      path: "/nested-checkbox",
      element: <NestedCheckbox2 />,
    },
    {
      path: "/otp-input-2",
      element: <Otp2 />,
    },
    {
      path: "/file-explorer-2",
      element: <FileExplorer2 />,
    },
    {
      path: "/tabs-2",
      element: <TabForm2 />,
    },
    {
      path: "/accordian-2",
      element: <Accordian2 />,
    },
    {
      path: "/todo-list-2",
      element: <ToDo2 />,
    },
    {
      path: "/chips-input-2",
      element: <ChipsInput2 />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
