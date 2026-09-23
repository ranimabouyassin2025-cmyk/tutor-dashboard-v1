import React from "react";

function StudentForm({
  editingStudent,
  handleName,
  handleAge,
  handleCountry,
  handleCourse,
  handleLesson,
  handleLevel,
  optionLevels,
  optionCourses,
  optionCountries,
  onSave,
  onCancel,
}) {
  return (
    <>
      <h1>Submit Your Form</h1>
      <form onSubmit={onSave}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={editingStudent.name}
          onChange={(e) => handleName(e.target.value)}
          required
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          value={editingStudent.age}
          type="number"
          onChange={(e) => handleAge(e.target.value)}
          min="0"
          required
        />
        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={editingStudent.country}
          onChange={(e) => handleCountry(e.target.value)}
          required
        >
          {optionCountries.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor="course">Course</label>
        <select
          id="course"
          value={editingStudent.course}
          onChange={(e) => handleCourse(e.target.value)}
          required
        >
          {optionCourses.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor="level">Level</label>
        <select
          id="level"
          value={editingStudent.level}
          onChange={(e) => handleLevel(e.target.value)}
          required
        >
          {optionLevels.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor="lesson">Lesson</label>
        <input
          id="lesson"
          value={editingStudent.lessons}
          type="number"
          onChange={(e) => handleLesson(e.target.value)}
          min="0"
          required
        />
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default StudentForm;
