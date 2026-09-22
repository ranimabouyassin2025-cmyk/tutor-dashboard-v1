import React, { useState } from 'react'
import StudentSearch from './StudentSearch'
import StudentList from './StudentList'
 
function StudentPage() {
    const [search,setSearch]=useState("")
    const [level,setLevel]=useState("All")
    const [course,setCourse]=useState("All")
    const [students,setStudents]=useState( [
    {
      id: 1,
      name: 'Ali and Hassan',
      age: 12,
      country: 'France',
      course: 'Arabic 101',
      level: 'beginner',
      lessons: 40
    },
    {
      id: 2,
      name: 'Bady',
      age: 28,
      country: 'Brazil',
      course: 'Arabic 101',
      level: 'intermediate',
      lessons: 30
    },
    {
      id: 3,
      name: 'Rahul',
      age: 43,
      country: 'India',
      course: 'Arabic 101',
      level: 'intermediate',
      lessons: 20
    },
      {
      id: 4,
      name: 'Elwira',
      age: 43,
      country: 'Belgium',
      course: 'Lebanese',
      level: 'intermediate',
      lessons: 20
    }
  ]
)
const [editingStudent, setEditingStudent] = useState(null);

function deleteStudent(id) {
  setStudents((prevStudents) =>
    prevStudents.filter((student) => student.id !== id)
  )
}
function editStudent(id){
  const selectedStudent=students.find((student)=>student.id==id);
   
  setEditingStudent(selectedStudent);
   
  
}
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
      students={students}
      Delete={deleteStudent}
      Edit={editStudent}
     />
     </>
  )
}

export default StudentPage