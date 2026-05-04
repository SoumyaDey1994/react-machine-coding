import "./tab4.css";

const TECH_SKILLS_LIST = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 1,
    name: "Node JS",
  },
  {
    id: 1,
    name: "React JS",
  },
  {
    id: 1,
    name: "SQL",
  },
  {
    id: 1,
    name: "System Design",
  },
];
export const Skills = (props) => {
  const { data, saveData } = props;

  const handleChange = (key, isChecked) => {
    const dataObj = { [key]: isChecked };
    saveData("skills", dataObj);
  };

  return (
    <div className="tab-section">
      <h1>Skills</h1>
      <div className="tab-details">
        <h2>Technical Skills</h2>
        {TECH_SKILLS_LIST.map((skill) => {
          return (
            <div key={skill.id} className="skill">
              <input
                type="checkbox"
                name={skill.name}
                checked={data.skills?.[skill.name] || false}
                onChange={(e) => handleChange(skill.name, e.target.checked)}
              />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
