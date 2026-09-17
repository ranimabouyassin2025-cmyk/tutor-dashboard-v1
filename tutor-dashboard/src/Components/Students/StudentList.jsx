import React from 'react'

function StudentList() {
  return (
    <section >
    <table className="student-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Course</th>
      <th>Level</th>
      <th>Lessons</th>
      <th>Actions</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Ali Hassan</td>
      <td>10</td>
      <td>Arabic 101</td>
      <td>Beginner</td>
      <td>12</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  </tbody>
</table>
    </section>
  )
}

export default StudentList