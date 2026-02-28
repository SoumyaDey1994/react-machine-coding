const SkillList = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 1,
    name: "React JS",
  },
  {
    id: 1,
    name: "Node JS",
  },
  {
    id: 1,
    name: "SQL",
  },
  {
    id: 1,
    name: "Python",
  },
];
export const Skills2 = ({ data, setData }) => {
  const setSkill = (isChecked, skillName) => {
    setData((prev) => {
      return {
        ...prev,
        skills: {
          ...prev.skills,
          [skillName]: isChecked,
        },
      };
    });
  };

  return (
    <div>
      <h2>Skills</h2>
      <div className="section">
        <h3>Select Skill</h3>
        {SkillList.map((skill) => {
          return (
            <div key={skill.id}>
              <input
                type="checkbox"
                name={skill.name}
                checked={data["skills"]?.[skill.name]}
                onClick={(e) => setSkill(e.target.checked, skill.name)}
              ></input>
              <label for={skill.name}>{skill.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
