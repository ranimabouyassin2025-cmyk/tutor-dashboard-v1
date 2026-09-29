function StudentSearch({
  search,
  setSearch,
  level,
  setLevel,
  course,
  setCourse,
}) {
  return (
    <section className="filter-bar student-search">
      <div className="filter-group">
        <label className="form-label" htmlFor="student-search">Search</label>
        <input
          className="form-control"
          type="search"
          id="student-search"
          placeholder="Search for a student"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label className="form-label" htmlFor="level-filter">Level</label>
        <select
          id="level-filter"
          className="form-control filter"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="All">All</option>

          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="form-label" htmlFor="course-filter">Course</label>
        <select
          id="course-filter"
          className="form-control filter"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="All">All</option>

          <option value="Arabic 101">Arabic 101</option>
          <option value="Lebanese">Lebanese Arabic</option>
        </select>
      </div>
    </section>
  );
}

export default StudentSearch;
