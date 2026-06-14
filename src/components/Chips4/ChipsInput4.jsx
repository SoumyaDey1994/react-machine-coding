import { useState } from "react";
import "./chipsInput3.css";

export const ChipsInput4 = () => {
  const [input, setInput] = useState("");
  const [skillList, setSkillList] = useState([]);

  const handleKeyDown = (key) => {
    const skillName = input.trim();
    if (skillName && key && key.toLowerCase() === "enter") {
      const newSkill = { id: Date.now(), name: skillName };
      setSkillList((prev) => [newSkill, ...prev]);
      setInput("");
    }
  };

  const handleDelete = (skillId) => {
    setSkillList((prev) => prev.filter((skill) => skill.id !== skillId));
  };

  return (
    <div className="root-container">
      <h1>Chips Input 4</h1>
      <div className="container">
        <input
          type="text"
          name="skills"
          className="skill-input"
          placeholder="Enter Skills"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e.key)}
        />

        {skillList.length > 0 && (
          <div className="skill-set">
            {skillList.map((skill) => (
              <div key={skill.id} className="skill-item">
                <span>{skill.name}</span>
                <button onClick={() => handleDelete(skill.id)}>X</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
