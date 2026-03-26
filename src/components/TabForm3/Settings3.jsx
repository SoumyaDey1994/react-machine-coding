import "./tabform3.css";

const THEMES = [
  {
    id: 1,
    name: "Light",
  },
  {
    id: 2,
    name: "Dark",
  },
];
export const Settings3 = ({ formData, setFormData }) => {
  const handleChange = (isChecked, themeName) => {
    setFormData((prev) => {
      return {
        ...prev,
        settings: {
          ...prev.settings,
          isDarkMode: themeName.toLowerCase() === "dark" ? isChecked : false,
        },
      };
    });
  };
  return (
    <div className="form-container">
      <h1>Settings</h1>
      <div className="form-details">
        {THEMES.map((theme) => {
          return (
            <div className="form-input">
              <input
                type="radio"
                style={{ margin: "none" }}
                checked={
                  theme.name.toLowerCase() === "dark"
                    ? formData?.settings?.isDarkMode
                    : !formData?.settings?.isDarkMode
                }
                onChange={(e) => handleChange(e.target.checked, theme.name)}
              />
              <label for="name" style={{ margin: "none" }}>
                {theme.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
