import React from 'react'

function StudentList({ search, level, course,students,onDelete,onEdit,addStudent }) {
   

  const filteredStudents = students.filter((item) => {

 
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase())
    
    const matchesLevel =
      level === "All" || item.level === level

    const matchesCourse =
      course === "All" || item.course === course

      

    return matchesSearch && matchesLevel && matchesCourse  
 } )
 

  return (
    <div className="student-list">
      <table className="student-table">
        <thead>
          <tr>
            <th scop="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Course</th>
            <th scope="col">Level</th>
            <th scope="col">Lessons</th>
            <th scope="col">Country</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
         

        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.level}</td>
                <td>{item.lessons}</td>
                <td>{item.country}</td>
                <td>
                  <button type="button" onClick={()=>onEdit(item.id)} >Edit</button>
                  <button type="button" onClick={()=>onDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No students found</td>
            </tr>
          )}
        </tbody>
        <button onClick={addStudent}>Add</button>
        
      </table>
    </div>
  )
}

export default StudentList