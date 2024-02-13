interface Student {
  id: number;
  name: string;
  courses: string[];
  gpa: number;
  email: string;
  phone: string;
  address: string;
}

function List({ students }: { students: Student[] }) {
  return (
    <div className='col-12 d-flex flex-wrap'>
      {students.map((student: Student) => {
        return (
          <div className='col-12 col-md-6 col-xl-4 col-xxl-3 p-2' key={student.id}>
            <div className='card h-100'>
              <h4 className='card-header fw-lighter'>{student.name}</h4>
              <div className='card-body'>
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
                <button className='btn btn-primary'>Update Student Profile</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
