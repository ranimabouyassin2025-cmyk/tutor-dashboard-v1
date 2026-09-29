import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

import AppLayout from "./Components/layout/AppLayout.jsx";
import Dashboard from "./Components/layout/Dashboard.jsx";
import StudentDashboard from "./Components/Students/StudentDashboard.jsx";
import LessonDashboard from "./Components/lessons/LessonDashboard.jsx";
function App() {
  const savedStudents = localStorage.getItem("students");

  const defaultStudents = [
    {
      id: 1,
      name: "Ali and Hassan",
      age: 12,
      country: "France",
      course: "Arabic 101",
      level: "beginner",
      purchasedLessons: 40,
    },
    {
      id: 2,
      name: "Bady",
      age: 28,
      country: "Brazil",
      course: "Arabic 101",
      level: "intermediate",
      purchasedLessons: 30,
    },
    {
      id: 3,
      name: "Rahul",
      age: 43,
      country: "India",
      course: "Arabic 101",
      level: "intermediate",
      purchasedLessons: 20,
    },
    {
      id: 4,
      name: "Elwira",
      age: 43,
      country: "Belgium",
      course: "Lebanese",
      level: "intermediate",
      purchasedLessons: 20,
    },
  ];
  const defaultLessons = [];
  const savedLessons = localStorage.getItem("lessons");
  const [students, setStudents] = useState(
    (savedStudents ? JSON.parse(savedStudents) : defaultStudents).map((student) => ({
      id: student.id,
      name: student.name,
      age: student.age,
      country: student.country,
      course: student.course,
      level: student.level,
      // Older saved students used "lessons" for this editable count.
      purchasedLessons: Number(
        student.purchasedLessons === undefined
          ? student.lessons || 0
          : student.purchasedLessons,
      ),
    })),
  );
  const [lessons, setLessons] = useState(
    savedLessons ? JSON.parse(savedLessons) : defaultLessons,
  );
  useEffect(() => {
    localStorage.setItem("lessons", JSON.stringify(lessons));
  }, [lessons]);
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);
  const totalPurchasedLessons = students.reduce(
    (total, student) => total + Number(student.purchasedLessons),
    0,
  );
  const completedLessons = lessons.filter((lesson) => lesson.status === "completed");
  const totalUpcomingLessons = lessons.filter((lesson) => lesson.status === "upcoming").length;

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route
          index
          element={
            <Dashboard
              students={students}
              completedLessons={completedLessons}
              totalPurchasedLessons={totalPurchasedLessons}
              totalUpcomingLessons={totalUpcomingLessons}
            />
          }
        />

        <Route
          path="students"
          element={
            <StudentDashboard
              students={students}
              setStudents={setStudents}
              completedLessons={completedLessons}
              lessons={lessons}
              setLessons={setLessons}
            />
          }
        />
        <Route
          path="lessons"
          element={
            <LessonDashboard
              lessons={lessons}
              setLessons={setLessons}
              students={students}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
