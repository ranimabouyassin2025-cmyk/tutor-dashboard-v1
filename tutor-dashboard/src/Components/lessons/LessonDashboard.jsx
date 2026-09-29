import LessonPage from "./LessonPage.jsx"
function LessonDashboard({lessons,setLessons,students}) {
  return (
    <> 
    <header className="page-header student-header">
    <section className="page-header__content student-header-content">
          <div className="page-header__text">
            <h1 className="page-heading">Lessons</h1>
            <p className="page-description">Manage your Lessons</p>
          </div>
        </section> 
    </header>
     <main className="page-content main">
        <LessonPage lessons={lessons} setLessons={setLessons} students={students}/>
      </main>
      </>
  )
}

export default LessonDashboard
