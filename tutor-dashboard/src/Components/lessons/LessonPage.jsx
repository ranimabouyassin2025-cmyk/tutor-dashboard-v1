import { useState } from "react";
import LessonSearch from "./LessonSearch.jsx";
import LessonList from "./LessonList.jsx";
import LessonForm from "./LessonForm.jsx";

function LessonPage({ lessons, setLessons, students }) {
  const optionCourses = ["Arabic 101", "Lebanese"];
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [date, setDate] = useState("");
  const [editingLesson, setEditingLesson] = useState(null);
  const [formMode, setFormMode] = useState(null);
  const [formError, setFormError] = useState("");

  function addLesson() {
    setEditingLesson({
      id: null,
      studentId: "",
      date: "",
      time: "",
      topic: "",
      status: "upcoming",
      course: "Arabic 101",
    });
    setFormMode("Add");
    setFormError("");
  }

  function editLesson(id) {
    const selectedLesson = lessons.find((lesson) => lesson.id === id);
    const student = students.find(
      (student) => String(student.id) === String(selectedLesson.studentId),
    );

    setEditingLesson({
      ...selectedLesson,
      studentId: student ? student.id : "",
      date: selectedLesson.date || "",
      time: selectedLesson.time || "",
      topic: selectedLesson.topic || "",
      status: selectedLesson.status || "upcoming",
      course: selectedLesson.course || "",
    });
    setFormMode("Edit");
    setFormError("");
  }

  function deleteLesson(id) {
    setLessons((prevLessons) => prevLessons.filter((lesson) => lesson.id !== id));
    if (editingLesson && editingLesson.id === id) {
      cancelForm();
    }
  }

  function handleStudent(studentId) {
    setEditingLesson((prev) => ({ ...prev, studentId: studentId }));
  }

  function handleDate(date) {
    setEditingLesson((prev) => ({ ...prev, date: date }));
  }

  function handleTime(time) {
    setEditingLesson((prev) => ({ ...prev, time: time }));
  }

  function handleTopic(topic) {
    setEditingLesson((prev) => ({ ...prev, topic: topic }));
  }

  function handleStatus(status) {
    setEditingLesson((prev) => ({ ...prev, status: status }));
  }

  function handleCourse(course) {
    setEditingLesson((prev) => ({ ...prev, course: course }));
  }

  function cancelForm() {
    setEditingLesson(null);
    setFormMode(null);
    setFormError("");
  }

  function saveLesson(e) {
    e.preventDefault();

    const student = students.find(
      (student) => String(student.id) === String(editingLesson.studentId),
    );
    if (!student) {
      setFormError("Select an existing student before saving the lesson.");
      return;
    }

    if (formMode === "Edit") {
      setLessons((prevLessons) =>
        prevLessons.map((lesson) =>
          lesson.id === editingLesson.id ? editingLesson : lesson,
        ),
      );
    } else if (formMode === "Add") {
      setLessons((prevLessons) => {
        const newLesson = {
          ...editingLesson,
          id: prevLessons.length === 0
            ? 1
            : Math.max(...prevLessons.map((lesson) => lesson.id)) + 1,
        };

        return [...prevLessons, newLesson];
      });
    }

    cancelForm();
  }

  return (
    <>
      <LessonSearch
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        date={date}
        setDate={setDate}
      />
      <LessonList
        search={search}
        status={status}
        date={date}
        lessons={lessons}
        addLesson={addLesson}
        students={students}
        onEdit={editLesson}
        onDelete={deleteLesson}
      />
      {editingLesson && (
        <LessonForm
          editingLesson={editingLesson}
          formMode={formMode}
          formError={formError}
          students={students}
          optionCourses={optionCourses}
          handleStudent={handleStudent}
          handleDate={handleDate}
          handleTime={handleTime}
          handleTopic={handleTopic}
          handleStatus={handleStatus}
          handleCourse={handleCourse}
          onSave={saveLesson}
          onCancel={cancelForm}
        />
      )}
    </>
  );
}

export default LessonPage;
