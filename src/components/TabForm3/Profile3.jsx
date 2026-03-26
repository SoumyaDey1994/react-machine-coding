import "./tabform3.css";

export const Profile3 = ({ formData, setFormData }) => {
  const handleChange = (value, sectionName) => {
    setFormData((prev) => {
      return {
        ...prev,
        profile: {
          ...prev.profile,
          [sectionName]: value,
        },
      };
    });
  };

  return (
    <div className="form-container">
      <h1>Profile</h1>
      <div className="form-details">
        <div className="form-input">
          <label for="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={formData?.profile?.name}
            onChange={(e) => handleChange(e.target.value.trim(), "name")}
          />
        </div>

        <div className="form-input">
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={formData?.profile?.email}
            onChange={(e) => handleChange(e.target.value.trim(), "email")}
          />
        </div>

        <div className="form-input">
          <label for="name">Contact No</label>
          <input
            type="number"
            maxLength={10}
            placeholder="Enter Contact No"
            value={formData?.profile?.phone}
            onChange={(e) => handleChange(e.target.value.trim(), "phone")}
          />
        </div>
      </div>
    </div>
  );
};
