import { Student } from './types';

function ListDesktop({ students, handleDelete }: { students: Student[]; handleDelete: (id: number) => void }) {
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
            <th className='text-header' scope='col'></th>
            <th className='text-header' scope='col'></th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {students.map((student: Student) => {
            return (
              <tr key={student._id}>
                <th scope='row'>{student._id}</th>
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
                <td>
                  <button className='btn btn-danger' id='delete-button' onClick={() => handleDelete(student.id)}>
                    delete
                  </button>
                </td>
                <td>
                  <button className='btn btn-success' id='update-button'>
                    update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListDesktop;
