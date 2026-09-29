import { useState } from "react";
import StudentSearch from "./StudentSearch";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";

function StudentPage({ students, setStudents, completedLessons,lessons,setLessons }) {
  const optionLevels = ["beginner", "intermediate", "fluent"];
  const optionCourses = ["Arabic 101", "Lebanese"];
  const optionCountries = ["France", "Brazil", "India", "Belgium"];
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");
  const [course, setCourse] = useState("All");
   
  const [editingStudent, setEditingStudent] = useState(null);
  const [formMode, setformMode] = useState(null);
  function deleteStudent(id) {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id),
    );
    setLessons((prevLessons)=>prevLessons.filter((lesson)=>lesson.studentId!==id))
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
  function handlePurchasedLessons(purchasedLessons) {
    setEditingStudent((prev) => ({ ...prev, purchasedLessons: purchasedLessons }));
  }
  function addStudent() {
    const newStudent = {
      id: null,
      name: "",
      age: "",
      country: "France",
      course: "Arabic 101",
      level: "beginner",
      purchasedLessons: 0,
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

      id:  students.length===0?1:Math.max(...students.map((student) => student.id)) + 1
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
        completedLessons={completedLessons}
        onDelete={deleteStudent}
        onEdit={editStudent}
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
          handlePurchasedLessons={handlePurchasedLessons}
          handleLevel={handleLevel}
          onSave={saveStudent}
          onCancel={cancelForm}
        />
      )}
    </>
  );
}

export default StudentPage;
