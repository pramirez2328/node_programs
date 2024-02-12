import students from '../students';

interface Student {
  id: number;
  name: string;
  courses: string[];
  gpa: number;
  email: string;
  phone: string;
  address: string;
}

function List() {
  return (
    <div>
      {students.map((student: Student) => {
        return (
          <div key={student.id}>
            <h1>{student.name}</h1>
            <p>{student.gpa}</p>
            <p>{student.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default List;
