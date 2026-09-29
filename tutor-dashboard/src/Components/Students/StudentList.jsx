function StudentList({ search, level, course, students, completedLessons, onDelete, onEdit, addStudent }) {
   

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
      <table className="data-table student-table">
        <thead className="data-table__head">
          <tr className="data-table__row">
            <th className="data-table__heading" scope="col">Id</th>
            <th className="data-table__heading" scope="col">Name</th>
            <th className="data-table__heading" scope="col">Age</th>
            <th className="data-table__heading" scope="col">Course</th>
            <th className="data-table__heading" scope="col">Level</th>
            <th className="data-table__heading" scope="col">Purchased classes</th>
            <th className="data-table__heading" scope="col">Completed classes</th>
            <th className="data-table__heading" scope="col">Country</th>
            <th className="data-table__heading" scope="col">Actions</th>
          </tr>
        </thead>
         

        <tbody className="data-table__body">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((item) => (
              <tr className="data-table__row" key={item.id}>
                <td className="data-table__cell">{item.id}</td>
                <td className="data-table__cell">{item.name}</td>
                <td className="data-table__cell">{item.age}</td>
                <td className="data-table__cell">{item.course}</td>
                <td className="data-table__cell">{item.level}</td>
                <td className="data-table__cell">{item.purchasedLessons}</td>
                <td className="data-table__cell">
                  {completedLessons.filter((lesson) => String(lesson.studentId) === String(item.id)).length}
                </td>
                <td className="data-table__cell">{item.country}</td>
                <td className="data-table__actions">
                  <button className="button button--secondary" type="button" onClick={()=>onEdit(item.id)} >Edit</button>
                  <button className="button button--danger" type="button" onClick={()=>onDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="data-table__row">
              <td className="data-table__empty" colSpan="9">No students found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="student-list__actions">
        <button className="button button--primary" type="button" onClick={addStudent}>Add</button>
      </div>
    </div>
  )
}

export default StudentList
