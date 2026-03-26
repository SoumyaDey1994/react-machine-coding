import "./tabform3.css";

const SKILLS = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "TypeScript",
  },
  {
    id: 3,
    name: "HTML/CSS",
  },
  {
    id: 4,
    name: "React",
  },
  {
    id: 5,
    name: "Angular",
  },
  {
    id: 6,
    name: "Node",
  },
  {
    id: 7,
    name: "SQL",
  },
];
export const Skills3 = ({ formData, setFormData }) => {
  const handleChange = (isChecked, skillName) => {
    setFormData((prev) => {
      return {
        ...prev,
        skills: {
          ...prev.skills,
          [skillName]: isChecked || false,
        },
      };
    });
  };
  return (
    <div className="form-container">
      <h1>Skills</h1>
      <div className="form-details">
        <div className="form-input">
          {SKILLS.map((skill) => {
            return (
              <>
                <input
                  type="checkbox"
                  style={{ margin: "none" }}
                  checked={formData?.skills?.[skill.name] || false}
                  onChange={(e) => handleChange(e.target.checked, skill.name)}
                />
                <label for="name" style={{ margin: "none" }}>
                  {skill.name}
                </label>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
