import { useState, useEffect } from 'react';
import Filter from './Filter';
import ListMobile from './ListMobile';
import ListDesktop from './ListDesktop';

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
  const [value, setValue] = useState('Choose...');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFilterBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterBy = e.target.value;
    setValue(filterBy);
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

  let subtitle = '';
  if (value === 'Choose...') {
    subtitle = '';
  } else if (value === 'All Students.') {
    subtitle = `There are ${students.length} students.`;
  } else if (value === 'Name') {
    subtitle = 'Students sorted by name: A-Z.';
  } else if (value === 'GPA') {
    subtitle = 'Students sorted by GPA: High to Low.';
  } else {
    subtitle = `There are ${filterStudents.length} students filtered by ${value}.`;
  }

  return (
    <div>
      <Filter handleFilter={handleFilterBy} courses={courses} />
      <h6>{subtitle}</h6>
      {windowWidth <= 1020 ? <ListMobile students={filterStudents} /> : <ListDesktop students={filterStudents} />}
    </div>
  );
}

export default Students;
