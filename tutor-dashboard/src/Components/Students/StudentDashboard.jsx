import React from 'react'
import StudentSearch from './StudentSearch.jsx'
function StudentDashboard() {
  return (
    <> 
        <header className="student-header">
          <title>Students</title>
        <section className="student-header-content">
          <div> 
            <h1>Students</h1>
             
            <p>Manage your Students</p>
            </div>
            
            <button>Add Student</button>
        </section>
    </header>
    <main className="main">
    <section className="SearchStudents">
      <StudentSearch/>
    </section>
    </main>
    </>
  )
}

export default StudentDashboard