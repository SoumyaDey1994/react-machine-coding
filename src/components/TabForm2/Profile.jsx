export const Profile2 = ({ data, setData }) => {
  const setInputValue = (value, section) => {
    if (!value.trim()) return;

    setData((prev) => {
      return {
        ...prev,
        [section]: value,
      };
    });
  };

  return (
    <div>
      <h2>Profile</h2>
      <div className="section">
        <label for="name" className="section-label">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={data.name}
          className="section-input"
          onChange={(e) => setInputValue(e.target.value, "name")}
        />
      </div>
      <div className="section">
        <label for="email" className="section-label">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Email Address"
          name="email"
          value={data.email}
          className="section-input"
          onChange={(e) => setInputValue(e.target.value, "email")}
        />
      </div>
      <div className="section">
        <label for="age" className="section-label">
          Age
        </label>
        <input
          type="number"
          placeholder="Enter Age"
          name="age"
          value={data.age}
          className="section-input"
          onChange={(e) => setInputValue(e.target.value, "age")}
        />
      </div>
    </div>
  );
};
