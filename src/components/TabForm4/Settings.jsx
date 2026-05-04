import "./tab4.css";

export const Settings = (props) => {
  const { data, saveData } = props;

  const handleChange = (key, isChecked) => {
    const dataObj = { isDarkMode: key === "dark" ? isChecked : false };
    saveData("settings", dataObj);
  };

  return (
    <div className="tab-section">
      <h1>Settings</h1>
      <div className="tab-details">
        <h2>Theme</h2>
        <div className="theme-category">
          <input
            type="radio"
            checked={!data.settings?.isDarkMode}
            onChange={(e) => handleChange("light", e.target.checked)}
          />
          <span>Light</span>
        </div>
        <div className="theme-category">
          <input
            type="radio"
            checked={data.settings?.isDarkMode}
            onChange={(e) => handleChange("dark", e.target.checked)}
          />
          <span>Dark</span>
        </div>
      </div>
    </div>
  );
};
