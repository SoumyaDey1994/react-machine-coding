const SKILL_LIST = [
  {
    id: 0,
    name: "JavaScript",
  },
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "Node",
  },
  {
    id: 3,
    name: "SQL",
  },
  {
    id: 4,
    name: "Excel",
  },
];
export const Skills = (props) => {
  const { data, setData } = props;

  const handleSkillChange = (value, name) => {
    setData((prev) => {
      return {
        ...prev,
        skills: {
          ...prev.skills,
          [name]: value,
        },
      };
    });
  };

  return (
    <div>
      <h1>Skills</h1>
      <div className="skills">
        {SKILL_LIST.map((skill) => {
          return (
            <div className="skill-item">
              <input
                type="checkbox"
                key={skill.id}
                checked={data.skills?.[skill?.name] || false}
                onChange={(e) =>
                  handleSkillChange(e.target.checked, skill.name)
                }
              />
              <label htmlFor={skill.name}>{skill.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
