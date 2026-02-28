export const Settings2 = ({ data, setData }) => {
  const setPreference = (isEnabled, themeName) => {
    setData((prev) => {
      return {
        ...prev,
        theme: {
          isDarkMode: themeName.toLowerCase() === "dark" ? isEnabled : false,
        },
      };
    });
  };
  
  return (
    <div>
      <h2>Settings</h2>
      <div>
        <div className="section">
          <h3>Set Preference</h3>
          <label for="light" className="section-label">
            Light
          </label>
          <input
            type="radio"
            name="light"
            className="section-radio"
            checked={!data["theme"]?.isDarkMode}
            onClick={(e) => setPreference(e.target.checked, "light")}
          />
        </div>

        <div className="section">
          <label for="dark" className="section-label">
            Dark
          </label>
          <input
            type="radio"
            name="dark"
            className="section-radio"
            checked={data["theme"]?.isDarkMode}
            onClick={(e) => setPreference(e.target.checked, "dark")}
          />
        </div>
      </div>
    </div>
  );
};
