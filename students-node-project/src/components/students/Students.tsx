import { useState } from 'react';
import Filter from './Filter';
import List from './List';

interface Student {
  id: number;
  name: string;
  courses: string[];
  gpa: number;
  email: string;
  phone: string;
  address: string;
}

const courses = [
  'Math',
  'History',
  'English',
  'Art',
  'Computer Science',
  'Physics',
  'Chemistry',
  'Biology',
  'Geography',
  'Spanish',
];

function Students({ students }: { students: Student[] }) {
  const [filterStudents, setStudents] = useState(students);

  const handleFilterBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterBy = e.target.value;
    if (filterBy === 'All Students') {
      setStudents([...students]);
    } else if (filterBy === 'Name') {
      setStudents([...students].sort((a: Student, b: Student) => a.name.localeCompare(b.name)));
    } else if (filterBy === 'GPA') {
      setStudents([...students].sort((a: Student, b: Student) => b.gpa - a.gpa));
    } else if (courses.includes(filterBy)) {
      const filterByCourse: Student[] = students.filter((student: Student) => student.courses.includes(filterBy));
      setStudents(filterByCourse);
    }
  };

  return (
    <div>
      <Filter handleFilter={handleFilterBy} courses={courses} />
      <List students={filterStudents} />
    </div>
  );
}

export default Students;
