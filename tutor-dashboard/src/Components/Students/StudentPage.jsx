import React, { useState } from 'react'
import StudentSearch from './StudentSearch'
import StudentList from './StudentList'
 
function StudentPage() {
    const [search,setSearch]=useState("")
    const [level,setLevel]=useState("")
    const [course,setCourse]=useState("")
  return (
     <>
     <StudentSearch
     search={search}
     setSearch={setSearch}
     level={level}
     setLevel={setLevel}
     course={course}
     setCourse={setCourse}
     />
     <StudentList
     search={search}
     level={level}
     course={course}
     />
     </>
  )
}

export default StudentPage