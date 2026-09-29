function LessonList({ lessons, students, search, status, date, addLesson, onEdit, onDelete }) {
  const filteredLessons = lessons.filter((lesson) => {
    const student = students.find(
      (student) => String(student.id) === String(lesson.studentId),
    );
    const studentName = student ? student.name : "Unknown student";
    const matchesSearch =
      studentName.toLowerCase().includes(search.toLowerCase()) ||
      (lesson.topic || "").toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "All" || lesson.status === status;
    const matchesDate = date === "" || lesson.date === date;

    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="student-list">
      <table className="data-table student-table">
        <thead className="data-table__head">
          <tr className="data-table__row">
            <th className="data-table__heading">Lesson Id</th>
            <th className="data-table__heading">Student Name</th>
            <th className="data-table__heading">Date</th>
            <th className="data-table__heading">Time</th>
            <th className="data-table__heading">Topic</th>
            <th className="data-table__heading">Status</th>
            <th className="data-table__heading">Course</th>
            <th className="data-table__heading">Actions</th>
          </tr>
        </thead>

        <tbody className="data-table__body">
          {filteredLessons.length > 0 ? (
            filteredLessons.map((lesson) => {
              const student = students.find(
                (student) => String(student.id) === String(lesson.studentId),
              );

              return (
                <tr key={lesson.id} className="data-table__row">
                  <td className="data-table__cell">{lesson.id}</td>
                  <td className="data-table__cell">{student ? student.name : "Unknown student"}</td>
                  <td className="data-table__cell">{lesson.date}</td>
                  <td className="data-table__cell">{lesson.time}</td>
                  <td className="data-table__cell">{lesson.topic}</td>
                  <td className="data-table__cell">{lesson.status}</td>
                  <td className="data-table__cell">{lesson.course}</td>
                  <td className="data-table__actions">
                    <button className="button button--secondary" type="button" onClick={() => onEdit(lesson.id)}>
                      Edit
                    </button>
                    <button className="button button--danger" type="button" onClick={() => onDelete(lesson.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="data-table__row">
              <td className="data-table__empty" colSpan="8">
                {lessons.length === 0 ? "No lessons yet" : "No lessons found"}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="student-list__actions">
        <button className="button button--primary" type="button" onClick={addLesson}>
          Add
        </button>
      </div>
    </div>
  );
}

export default LessonList;
