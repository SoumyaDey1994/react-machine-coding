const THEMES = {
  LIGHT: "Light",
  DARK: "Dark"
}

export const Settings = (props) => {
  const { data, setData } = props;

  const handleThemeChange = (value, themeName) => {
    setData((prev) => ({
      ...prev,
      theme: {
        isDarkMode: themeName.toLowerCase() === "dark" ? value : false,
      },
    }));
  };

  return (
    <div>
      <h1>Settings</h1>
      <div className="settings">
        <div>
          <h2>Theme</h2>
          <label>{THEMES.LIGHT}</label>
          <input
            type="radio"
            name={THEMES.LIGHT}
            checked={!data.theme?.isDarkMode}
            onChange={(e) => handleThemeChange(e.target.checked, THEMES.LIGHT)}
          />
          <label>{THEMES.DARK}</label>
          <input
            type="radio"
            name={THEMES.DARK}
            checked={data.theme?.isDarkMode}
            onChange={(e) => handleThemeChange(e.target.checked, THEMES.DARK)}
          />
        </div>
      </div>
    </div>
  );
};
