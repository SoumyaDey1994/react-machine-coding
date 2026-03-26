import { useState } from "react";
import { Profile3 } from "./Profile3";
import { Settings3 } from "./Settings3";
import { Skills3 } from "./Skills3";
import "./tabform3.css";

const TABS = [
  {
    id: 1,
    name: "Profile",
    component: Profile3,
  },
  {
    id: 2,
    name: "Skills",
    component: Skills3,
  },
  {
    id: 3,
    name: "Settings",
    component: Settings3,
  },
];
export const TabForm3 = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [formData, setFormData] = useState({});

  const ActiveComponent = TABS[activeTabIndex].component;

  return (
    <div className="conatiner">
      <h1>Tabs Component 3</h1>
      <div className="tab-container">
        <div className="tab-header">
          {TABS.map((tab, idx) => (
            <button
              key={tab.id}
              style={{
                background: `${idx === activeTabIndex ? "blue" : ""}`,
                color: `${idx === activeTabIndex ? "white" : ""}`,
              }}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="tab-form">
          <ActiveComponent formData={formData} setFormData={setFormData} />
        </div>
      </div>
      <div className="tab-navigation">
        {activeTabIndex > 0 && (
          <button onClick={() => setActiveTabIndex(activeTabIndex - 1)}>
            Prev
          </button>
        )}
        {activeTabIndex < TABS.length - 1 && (
          <button onClick={() => setActiveTabIndex(activeTabIndex + 1)}>
            Next
          </button>
        )}
        {activeTabIndex === TABS.length - 1 && <button>Submit</button>}
      </div>
    </div>
  );
};
