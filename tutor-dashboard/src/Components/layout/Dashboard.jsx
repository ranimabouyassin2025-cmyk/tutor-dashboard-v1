function Dashboard({ students, completedLessons, totalPurchasedLessons, totalUpcomingLessons }) {
  return (
    <main className="page-content main-content">
      <h2 className="page-heading">Welcome Back</h2>

      <section className="card-grid cards">
        <article className="card">
          <h3 className="card-heading">Students</h3>
          <p className="card-value">{students.length}</p>
        </article>

        <article className="card">
          <h3 className="card-heading">Purchased classes</h3>
          <p className="card-value">{totalPurchasedLessons}</p>
        </article>

        <article className="card">
          <h3 className="card-heading">Completed classes</h3>
          <p className="card-value">{completedLessons.length}</p>
        </article>

        <article className="card">
          <h3 className="card-heading">Upcoming</h3>
          <p className="card-value">{totalUpcomingLessons}</p>
        </article>
      </section>

      <h3 className="section-heading">Student class totals</h3>

      <section className="card-grid cards">
        {students.length > 0 ? (
          students.map((student) => (
            <article className="card student" key={student.id}>
              <h3 className="card-heading">{student.name}</h3>
              <p>Purchased classes: {student.purchasedLessons}</p>
              <p>
                Completed classes: {completedLessons.filter(
                  (lesson) => String(lesson.studentId) === String(student.id),
                ).length}
              </p>
            </article>
          ))
        ) : (
          <p className="page-description">No students yet.</p>
        )}
      </section>
    </main>
  );
}

export default Dashboard;
