function StudentForm({
  editingStudent,
  handleName,
  handleAge,
  handleCountry,
  handleCourse,
  handlePurchasedLessons,
  handleLevel,
  optionLevels,
  optionCourses,
  optionCountries,
  onSave,
  onCancel,
}) {
  return (
    <section className="student-form-section">
      <h1 className="page-heading">Submit Your Form</h1>
      <form className="form student-form" onSubmit={onSave}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-control" id="name" value={editingStudent.name} onChange={(e) => handleName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="age">Age</label>
          <input className="form-control" id="age" value={editingStudent.age} type="number" onChange={(e) => handleAge(e.target.valueAsNumber)} min="0" required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="country">Country</label>
          <select className="form-control" id="country" value={editingStudent.country} onChange={(e) => handleCountry(e.target.value)} required>
            {optionCountries.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="course">Course</label>
          <select className="form-control" id="course" value={editingStudent.course} onChange={(e) => handleCourse(e.target.value)} required>
            {optionCourses.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="level">Level</label>
          <select className="form-control" id="level" value={editingStudent.level} onChange={(e) => handleLevel(e.target.value)} required>
            {optionLevels.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="purchased-lessons">Purchased classes</label>
          <input
            className="form-control"
            id="purchased-lessons"
            value={editingStudent.purchasedLessons}
            type="number"
            onChange={(e) => handlePurchasedLessons(e.target.value === "" ? "" : Number(e.target.value))}
            min="0"
            step="1"
            required
          />
          <p className="page-description">Completed classes are counted from lessons marked completed.</p>
        </div>
        <div className="form-actions">
          <button className="button button--secondary" type="button" onClick={onCancel}>
            Cancel
          </button>
          <button className="button button--primary" type="submit">Save</button>
        </div>
      </form>
    </section>
  );
}

export default StudentForm;
