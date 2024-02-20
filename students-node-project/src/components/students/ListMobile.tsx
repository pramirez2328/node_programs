import { Student } from './types';

function ListMobile({ students, handleDelete }: { students: Student[]; handleDelete: (id: number) => void }) {
  return (
    <div className='col-12 d-flex flex-wrap'>
      {students.map((student: Student) => {
        return (
          <div className='col-12 col-md-4 col-xl-3  p-2' key={student._id}>
            <div className='card h-100'>
              <h4 className='card-header fw-bold text-muted'>{student.name}</h4>
              <div className='card-body pb-0'>
                <p className='card-text fw-bolder'>ID: {student._id && ('' + student?._id).slice(-7)}</p>
                <p className='card-text fw-bolder'>
                  Courses: {student.courses[0]}, {student.courses[1]}, {student.courses[2]}.
                </p>
                <p className='card-text fw-bolder'>Phone: {student.phone}</p>
                <p className='card-text fw-bolder'>Address: {student.address}</p>

                <p className='card-text fw-bolder'>GPA: {student.gpa}</p>
                <p>
                  <a className='card-title fw-bolder' href={student.email}>
                    Email: {student.email}
                  </a>
                </p>
              </div>
              <div className='p-2'>
                <button className='btn btn-danger col-12' id='delete-button' onClick={() => handleDelete(student._id)}>
                  delete
                </button>
              </div>
              <div className='p-2'>
                <button className='btn btn-success col-12' id='update-button'>
                  update
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListMobile;
