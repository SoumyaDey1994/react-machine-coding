import { useState } from "react";
import { Profile } from "./Profile";
import { Settings } from "./Settings";
import { Skills } from "./Skills";
import "./tab4.css";

const TAB_DETAILS = [
  {
    id: 1,
    name: "Profile",
    component: Profile,
  },
  {
    id: 2,
    name: "Skills",
    component: Skills,
  },
  {
    id: 3,
    name: "Settings",
    component: Settings,
  },
];

export const TabForm4 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState({});
  const [shouldDisplayData, setShouldDisplayData] = useState(false);

  const saveFormData = (sectionName, dataObj) => {
    const updatedData = { ...tabData };
    updatedData[sectionName] = { ...updatedData[sectionName], ...dataObj };
    setTabData(updatedData);
  };

  const ActiveTabComponent = TAB_DETAILS[activeTab].component;

  return (
    <div className="root-container">
      <h1> Tabs Componnet 4 </h1>
      <div className="tab-container">
        <div className="tab-titles">
          {TAB_DETAILS.map((tab, idx) => (
            <button key={tab.id} onClick={() => setActiveTab(idx)}>
              {tab.name}
            </button>
          ))}
        </div>
        <div className="tab-body">
          <ActiveTabComponent data={tabData} saveData={saveFormData} />
        </div>
      </div>
      <div className="tab-navigation">
        {activeTab > 0 && (
          <button onClick={() => setActiveTab((prev) => prev - 1)}>Prev</button>
        )}
        {activeTab < TAB_DETAILS.length - 1 && (
          <button onClick={() => setActiveTab((prev) => prev + 1)}>Next</button>
        )}
        {activeTab === TAB_DETAILS.length - 1 && (
          <button onClick={() => setShouldDisplayData(true)}>Submit</button>
        )}
      </div>

      {shouldDisplayData && <div>{JSON.stringify(tabData)}</div>}
    </div>
  );
};
