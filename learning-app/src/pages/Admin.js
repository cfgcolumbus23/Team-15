import React, { useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      lesson: "Introduction to Programming",
      pathProgress: 25,
      previousScores: [90, 80, 85],
      incentivesEarned: getRandomAmount(5, 275),
    },
    {
      id: 2,
      name: "Jane Smith",
      lesson: "Web Development Basics",
      pathProgress: 60,
      previousScores: [75, 70, 65],
      incentivesEarned: getRandomAmount(5, 275),
    },
    {
      id: 3,
      name: "Clay Jones",
      lesson: "Tech Literacy",
      pathProgress: 83,
      previousScores: [35, 80, 95],
      incentivesEarned: getRandomAmount(5, 275),
    },
    {
      id: 4,
      name: "Sarah Brown",
      lesson: "Data Science Fundamentals",
      pathProgress: 45,
      previousScores: [70, 65, 60],
      incentivesEarned: getRandomAmount(5, 275),
    },
    {
      id: 5,
      name: "Michael Lee",
      lesson: "Machine Learning",
      pathProgress: 75,
      previousScores: [85, 90, 80],
      incentivesEarned: getRandomAmount(5, 275),
    },
    {
      id: 6,
      name: "Emily White",
      lesson: "JavaScript Programming",
      pathProgress: 70,
      previousScores: [75, 80, 70],
      incentivesEarned: getRandomAmount(5, 275),
    },
    {
      id: 7,
      name: "Daniel Harris",
      lesson: "Database Management",
      pathProgress: 55,
      previousScores: [65, 70, 60],
      incentivesEarned: getRandomAmount(5, 275),
    },
    {
      id: 8,
      name: "Olivia Johnson",
      lesson: "Front-end Development",
      pathProgress: 90,
      previousScores: [95, 92, 88],
      incentivesEarned: getRandomAmount(5, 275),
    },
  ]);

  // Function to generate random cash amount within a range
  function getRandomAmount(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div>
      <h1>Admin Portal</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lesson</th>
            <th>Progress</th>
            <th>Previous Scores</th>
            <th>Incentives Earned</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.lesson}</td>
              <td>{student.pathProgress}%</td>
              <td>
                {student.previousScores.map((score, index) => (
                  <span key={index}>{score} </span>
                ))}
              </td>
              <td>${student.incentivesEarned}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
