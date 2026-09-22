function StudentSearch({
  search,
  setSearch,
  level,
  setLevel,
  course,
  setCourse,
  student,
  setStudent,
}) {
  return (
    <section className="student-search">
      <label htmlFor="student-search">Search</label>
      <input
        type="search"
        id="student-search"
        placeholder="Search for a student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <label htmlFor="level-filter">Level</label>
      <select
        id="level-filter"
        className="filter"
        defaultValue="All"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option value="All">All</option>

        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
      </select>

      <label htmlFor="course-filter">Course</label>
      <select
        id="course-filter"
        className="filter"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        defaultValue="All"
      >
        <option value="All">All</option>

        <option value="Arabic 101">Arabic 101</option>
        <option value="Lebanese">Lebanese Arabic</option>
      </select>
    </section>
  );
}

export default StudentSearch;
