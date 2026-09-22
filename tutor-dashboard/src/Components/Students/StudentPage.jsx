import React, { useState } from "react";
import StudentSearch from "./StudentSearch";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";

function StudentPage() {
  const optionLevels = ["beginner", "intermediate", "fluent"];
  const optionCourses = ["Arabic 101", "Lebanese"];
  const optionCountries = ["France", "Brazil", "India", "Belgium"];
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");
  const [course, setCourse] = useState("All");
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ali and Hassan",
      age: 12,
      country: "France",
      course: "Arabic 101",
      level: "beginner",
      lessons: 40,
    },
    {
      id: 2,
      name: "Bady",
      age: 28,
      country: "Brazil",
      course: "Arabic 101",
      level: "intermediate",
      lessons: 30,
    },
    {
      id: 3,
      name: "Rahul",
      age: 43,
      country: "India",
      course: "Arabic 101",
      level: "intermediate",
      lessons: 20,
    },
    {
      id: 4,
      name: "Elwira",
      age: 43,
      country: "Belgium",
      course: "Lebanese",
      level: "intermediate",
      lessons: 20,
    },
  ]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formMode, setformMode] = useState(null);
  function deleteStudent(id) {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id),
    );
  }
  function editStudent(id) {
    const selectedStudent = students.find((student) => student.id === id);

    setEditingStudent(selectedStudent);
    setformMode("Edit");
  }
  function handleName(name) {
    setEditingStudent((prev) => ({
      ...prev,
      name: name,
    }));
  }
  function handleAge(age) {
    setEditingStudent((prev) => ({
      ...prev,
      age: age,
    }));
  }
  function handleCountry(country) {
    setEditingStudent((prev) => ({ ...prev, country: country }));
  }
  function handleCourse(course) {
    setEditingStudent((prev) => ({ ...prev, course: course }));
  }
  function handleLevel(level) {
    setEditingStudent((prev) => ({ ...prev, level: level }));
  }
  function handleLesson(lessons) {
    setEditingStudent((prev) => ({ ...prev, lessons: lessons }));
  }
  function addStudent() {
    const newStudent = {
      id: null,
      name: "",
      age: "",
      country: "",
      course: "",
      level: "",
      lessons: 0,
    };

    setEditingStudent(newStudent);
    setformMode("Add");
  }
  function cancelForm() {
  setEditingStudent(null);
  setformMode(null);
}

  function saveStudent(e) {
  e.preventDefault();

  if (formMode === "Edit") {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === editingStudent.id
          ? editingStudent
          : student
      )
    );
  } 
  
  else if (formMode === "Add") {
    const newStudent = {
      ...editingStudent,
      id: Math.max(...students.map((student) => student.id)) + 1,
    };

    setStudents((prev) => [
      ...prev,
      newStudent
    ]);
  }

  setEditingStudent(null);
  setformMode(null);
}

  return (
    <>
      <StudentSearch
        search={search}
        setSearch={setSearch}
        level={level}
        setLevel={setLevel}
        course={course}
        setCourse={setCourse}
      />
      <StudentList
        search={search}
        level={level}
        course={course}
        students={students}
        Delete={deleteStudent}
        Edit={editStudent}
        addStudent={addStudent}
         
      />
      {editingStudent && (
        <StudentForm
          editingStudent={editingStudent}
          optionLevels={optionLevels}
          optionCourses={optionCourses}
          optionCountries={optionCountries}
          handleName={handleName}
          handleAge={handleAge}
          handleCountry={handleCountry}
          handleCourse={handleCourse}
          handleLesson={handleLesson}
          handleLevel={handleLevel}
          Save={saveStudent}
          Cancel={cancelForm}
        />
      )}
    </>
  );
}

export default StudentPage;
