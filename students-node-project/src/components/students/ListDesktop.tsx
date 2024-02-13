interface Student {
  id: number;
  name: string;
  courses: string[];
  gpa: number;
  email: string;
  phone: string;
  address: string;
}

function ListDesktop({ students }: { students: Student[] }) {
  return (
    <div id='table-desktop'>
      <table className='table table-striped'>
        <thead className='table-header'>
          <tr className='text-center'>
            <th className='text-header' scope='col'>
              ID
            </th>
            <th className='text-header' scope='col'>
              Name
            </th>
            <th className='text-header' scope='col'>
              Courses
            </th>
            <th className='text-header' scope='col'>
              GPA
            </th>
            <th className='text-header' scope='col'>
              Email
            </th>
            <th className='text-header' scope='col'>
              Phone
            </th>
            <th className='text-header' scope='col'>
              Address
            </th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {students.map((student: Student) => {
            return (
              <tr key={student.id}>
                <th scope='row'>{student.id}</th>
                <td>{student.name}</td>
                <td>
                  {student.courses[0]}, {student.courses[1]}, {student.courses[2]}
                </td>
                <td>{student.gpa}</td>
                <td>
                  <a href={student.email}>{student.email}</a>
                </td>
                <td>{student.phone}</td>
                <td>{student.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListDesktop;
