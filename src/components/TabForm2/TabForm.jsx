import "./tabForm.css";
import { Profile2 } from "./Profile.jsx";
import { Settings2 } from "./Settings.jsx";
import { Skills2 } from "./Skills.jsx";
import { useState } from "react";

const TabData = [
  {
    id: 0,
    title: "Profile",
    component: Profile2,
  },
  {
    id: 1,
    title: "Skills",
    component: Skills2,
  },
  {
    id: 2,
    title: "Settings",
    component: Settings2,
  },
];
export const TabForm2 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({});
  const [showFormData, setShowFormData] = useState(false);

  const ActiveTabComponent = TabData[activeTab].component;

  return (
    <div className="root-container">
      <h1>Tab Form 2</h1>
      <div className="tab-container">
        <div className="tab-group">
          {TabData.map((tab, idx) => (
            <button
              className="tab-btn"
              key={idx}
              onClick={() => setActiveTab(idx)}
            >
              <strong>{tab.title}</strong>
            </button>
          ))}
        </div>
        <div>
          <ActiveTabComponent data={formData} setData={setFormData} />
        </div>
      </div>
      <div className="action-btn-group">
        {activeTab > 0 && (
          <button
            className="action-btn"
            onClick={() => setActiveTab(activeTab - 1)}
          >
            Prev
          </button>
        )}
        {activeTab < TabData.length - 1 && (
          <button
            className="action-btn"
            onClick={() => setActiveTab(activeTab + 1)}
          >
            Next
          </button>
        )}
        {activeTab === TabData.length - 1 && (
          <button className="action-btn" onClick={() => setShowFormData(true)}>
            Submit
          </button>
        )}
      </div>
      {showFormData && (
        <div>
          {Object.keys(formData).map((key) => {
            return (
              <div className="tab-data">
                <span className="data-key">{key}</span>
                <span>
                  {typeof formData[key] === "object"
                    ? JSON.stringify(formData[key])
                    : formData[key]}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
