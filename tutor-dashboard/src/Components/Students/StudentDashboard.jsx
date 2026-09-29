import StudentPage from "./StudentPage.jsx";

function StudentDashboard({ students, setStudents, completedLessons,lessons,setLessons }) {
  return (
    <>
      <header className="page-header student-header">
        <section className="page-header__content student-header-content">
          <div className="page-header__text">
            <h1 className="page-heading">Students</h1>
            <p className="page-description">Manage your Students</p>
          </div>
        </section>
      </header>

      <main className="page-content main">
        <StudentPage students={students} setStudents={setStudents} completedLessons={completedLessons} lessons={lessons} setLessons={setLessons} />
      </main>
    </>
  );
}

export default StudentDashboard;
