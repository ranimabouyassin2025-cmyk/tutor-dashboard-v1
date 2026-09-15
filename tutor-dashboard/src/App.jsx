 import React from 'react'
 
  import Dashboard from './Components/layout/Dashboard.jsx'
  import StudentDashboard from './Components/Students/StudentDashboard.jsx'
  import StudentList from './Components/Students/StudentList.jsx'
 function App() {
   return ( <> 
      <StudentDashboard/>
      <StudentList/>
      </>
   )
 }
 
 export default App