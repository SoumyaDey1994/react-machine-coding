import { useState } from "react";
import "./index.css";
import { Profile } from "./Profile";
import { Skills } from "./Skills";
import { Settings } from "./Settings";

const TAB_LIST = [
  {
    id: 0,
    name: "Profile",
    component: <Profile />,
  },
  {
    id: 1,
    name: "Skills",
    component: <Skills />,
  },
  {
    id: 2,
    name: "Settins",
    component: <Settings />,
  },
];

export const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tabs-container">
      <div className="tab-headers">
        {TAB_LIST.map((tab, index) => {
          return (
            <button
              type="text"
              key={tab.id}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
      <div className="tab-body">{TAB_LIST[activeTab]?.component}</div>
      <div className="tab-actions">
        {activeTab > 0 && (
          <button
            type="button"
            onClick={() => setActiveTab((prev) => prev - 1)}
          >
            Prev
          </button>
        )}
        {activeTab < TAB_LIST.length - 1 && (
          <button
            type="button"
            onClick={() => setActiveTab((prev) => prev + 1)}
          >
            Next
          </button>
        )}
        {activeTab === TAB_LIST.length - 1 && (
          <button type="submit">Submit</button>
        )}
      </div>
    </div>
  );
};
