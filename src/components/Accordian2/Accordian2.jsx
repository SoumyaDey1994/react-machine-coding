import { useState } from "react";
import "./accordian.css";

const data = [
  {
    id: 1,
    title: "JavaScript",
    description:
      "JavaScript is a high-level, prototype-based, dynamically typed programming language primarily used for event-driven, asynchronous programming in web environments.",
  },
  {
    id: 2,
    title: "SQL",
    description:
      "SQL (Structured Query Language) is a declarative domain-specific language used to manage and manipulate relational databases.",
  },
  {
    id: 3,
    title: "Python",
    description:
      "Python is a high-level, interpreted, dynamically typed programming language emphasizing readability, concise syntax, and multi-paradigm support (OOP, functional, procedural).",
  },
  {
    id: 4,
    title: "Java",
    description:
      "Java is a statically typed, object-oriented programming language that runs on the Java Virtual Machine (JVM), enabling platform independence through bytecode execution.",
  },
  {
    id: 5,
    title: "C++",
    description:
      "C++ is a statically typed, compiled programming language that supports procedural, object-oriented, and generic programming paradigms with fine-grained memory control.",
  },
];

export const Accordian2 = () => {
  const [expandedItemId, setExpandedItemId] = useState(-1);

  const handleExpand = (itemId) => {
    setExpandedItemId(() => (expandedItemId === itemId ? -1 : itemId));
  };

  return (
    <div className="container">
      <h1>Accordian 2</h1>
      <div className="accordian-group">
        {data.map((node) => {
          return (
            <div className="accordian" key={node.id}>
              <div className="header">
                <h3>{node.title}</h3>
                <button onClick={() => handleExpand(node.id)}>
                  {expandedItemId === node.id ? "Collapse" : "Expand"}
                </button>
              </div>
              {expandedItemId === node.id && (
                <div className="body">
                  <p>{node.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
