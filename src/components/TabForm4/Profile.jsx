import "./tab4.css";

export const Profile = (props) => {
  const { data, saveData } = props;

  const handleChange = (key, value) => {
    const dataObj = { [key]: value };
    saveData("profile", dataObj);
  };

  return (
    <div className="tab-section">
      <h1>Profile</h1>
      <div className="profile-details">
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={data.profile?.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Age"
          name="age"
          value={data.profile?.age}
          onChange={(e) => handleChange("age", e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email Id"
          name="email"
          value={data.profile?.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Phone Number"
          name="phone"
          value={data.profile?.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
      </div>
    </div>
  );
};
