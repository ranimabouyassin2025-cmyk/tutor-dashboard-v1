function LessonSearch({ search, setSearch, status, setStatus, date, setDate }) {
  return (
    <section className="filter-bar student-search">
      <div className="filter-group">
        <label className="form-label" htmlFor="lesson-search">Search</label>
        <input
          className="form-control"
          id="lesson-search"
          type="search"
          placeholder="Search by student or topic"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label className="form-label" htmlFor="lesson-date-filter">
          Date
        </label>
        <input type="date" id="lesson-date-filter" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="filter-group">
        <label className="form-label" htmlFor="lesson-status-filter">
          Status 
        </label>
        <select id="lesson-status-filter"
         className="form-control filter"
         value={status}
         onChange={(e)=>setStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="completed">Completed</option>
          <option value="upcoming">Upcoming</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
    </section>
  );
}

export default LessonSearch;
