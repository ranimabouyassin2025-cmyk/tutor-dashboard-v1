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
  Save,
  Cancel
}) {
  return (
    <>
      <h1>Submit Your Form</h1>
      <form>
        <input
          value={editingStudent.name}
          onChange={(e) => handleName(e.target.value)}
        />
        <input
          value={editingStudent.age}
          type="number"
          onChange={(e) => handleAge(e.target.value)}
        />
        <select
          value={editingStudent.country}
          onChange={(e) => handleCountry(e.target.value)}
        >
          {optionCountries.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          value={editingStudent.course}
          onChange={(e) => handleCourse(e.target.value)}
        >
          {optionCourses.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          value={editingStudent.level}
          onChange={(e) => handleLevel(e.target.value)}
        >
          {optionLevels.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          value={editingStudent.lessons}
          type="number"
          onChange={(e) => handleLesson(e.target.value)}
        />
        <button type="button" onClick={Cancel}>
          Cancel
        </button>
        <button type="button" onClick={Save}>
          Save
        </button>
      </form>
    </>
  );
}

export default StudentForm;
