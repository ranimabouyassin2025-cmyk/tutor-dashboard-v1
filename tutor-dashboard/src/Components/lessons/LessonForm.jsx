function LessonForm({
  editingLesson,
  formMode,
  formError,
  students,
  optionCourses,
  handleStudent,
  handleDate,
  handleTime,
  handleTopic,
  handleStatus,
  handleCourse,
  onSave,
  onCancel,
}) {
  return (
    <section className="student-form-section">
      <h1 className="page-heading">{formMode === "Edit" ? "Edit Lesson" : "Add Lesson"}</h1>
      <form className="form student-form" onSubmit={onSave}>
        <div className="form-group">
          <label className="form-label" htmlFor="lesson-student">Student</label>
          <select
            className="form-control"
            id="lesson-student"
            value={editingLesson.studentId}
            onChange={(e) => handleStudent(Number(e.target.value))}
            required
          >
            <option value="" disabled>Select a student</option>
            {students.map((student) => (
              <option value={student.id} key={student.id}>
                {student.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="lesson-date">Date</label>
          <input
            className="form-control"
            id="lesson-date"
            type="date"
            value={editingLesson.date}
            onChange={(e) => handleDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="lesson-time">Time</label>
          <input
            className="form-control"
            id="lesson-time"
            type="time"
            value={editingLesson.time}
            onChange={(e) => handleTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="lesson-topic">Topic (optional)</label>
          <input
            className="form-control"
            id="lesson-topic"
            type="text"
            value={editingLesson.topic}
            onChange={(e) => handleTopic(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="lesson-status">Status</label>
          <select
            className="form-control"
            id="lesson-status"
            value={editingLesson.status}
            onChange={(e) => handleStatus(e.target.value)}
            required
          >
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="lesson-course">Course</label>
          <select
            className="form-control"
            id="lesson-course"
            value={editingLesson.course}
            onChange={(e) => handleCourse(e.target.value)}
            required
          >
            <option value="" disabled>Select a course</option>
            {optionCourses.map((course) => (
              <option value={course} key={course}>{course}</option>
            ))}
          </select>
        </div>

        {students.length === 0 && (
          <p className="page-description">Add a student before creating a lesson.</p>
        )}

        {formError && <p role="alert">{formError}</p>}

        <div className="form-actions">
          <button className="button button--secondary" type="button" onClick={onCancel}>
            Cancel
          </button>
          <button className="button button--primary" type="submit" disabled={students.length === 0}>
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default LessonForm;
