function StudentSearch() {
  return (
    <section className="student-search">

      <label htmlFor="student-search">Search</label>
      <input
        type="search"
        id="student-search"
        placeholder="Search for a student"
      />

      <label htmlFor="level-filter">Level</label>
      <select
        id="level-filter"
        className="filter"
        defaultValue=""
      >
        <option value="" disabled>
          Filter by level
        </option>

        <option value="beginner">
          Beginner
        </option>
      </select>

      <label htmlFor="course-filter">Course</label>
      <select
        id="course-filter"
        className="filter"
        defaultValue=""
      >
        <option value="" disabled>
          Filter by course
        </option>

        <option value="arabic-101">
          Arabic 101
        </option>
      </select>

    </section>
  );
}

export default StudentSearch;