import "./index.css";

export const Profile = (props) => {
  const { data, setData } = props;

  const handleChange = (value, attribute) => {
    setData((prev) => ({ ...prev, [attribute]: value }));
  };

  return (
    <div>
      <h1>Profile</h1>
      <div className="profile-item">
        <label htmlFor="name" className="profile-label">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={data.name}
          onChange={(e) => handleChange(e.target.value, "name")}
          className="profile-input"
        />
      </div>
      <div className="profile-item">
        <label htmlFor="age" className="profile-label">
          Age
        </label>
        <input
          type="number"
          placeholder="Enter age"
          name="age"
          value={data.age}
          onChange={(e) => handleChange(e.target.value, "age")}
          className="profile-input"
        />
      </div>
      <div className="profile-item">
        <label htmlFor="email" className="profile-label">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={data.email}
          onChange={(e) => handleChange(e.target.value, "email")}
          className="profile-input"
        />
      </div>
    </div>
  );
};
