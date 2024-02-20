import { useState, useEffect } from 'react';
import Filter from './Filter';
import AddStudent from './AddStudent';
import ListMobile from './ListMobile';
import ListDesktop from './ListDesktop';
import { Student } from './types';
import { courses } from '../../../util';

function Students({
  students,
  value,
  handleDelete,
  fetchStudents,
}: {
  students: Student[];
  value: string;
  handleDelete: (id: number) => void;
  fetchStudents: () => void;
}) {
  const [filterStudents, setStudents] = useState(students);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filterBy, setValue] = useState(value);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setStudents(students);
    setValue(value);
  }, [students, value]);

  const handleFilterBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value;
    setValue(filter);
    if (filter === 'All Students') {
      setStudents([...students]);
    } else if (filter === 'Name') {
      setStudents([...students].sort((a: Student, b: Student) => a.name.localeCompare(b.name)));
    } else if (filter === 'GPA') {
      setStudents([...students].sort((a: Student, b: Student) => b.gpa - a.gpa));
    } else if (courses.includes(filter)) {
      const filterByCourse: Student[] = students.filter((student: Student) => student.courses.includes(filter));
      setStudents(filterByCourse);
    }
  };

  let subtitle = '';
  if (filterBy === 'Choose...') {
    subtitle = '';
  } else if (filterBy === 'All Students') {
    subtitle = `There are ${students.length} students.`;
  } else if (filterBy === 'Name') {
    subtitle = 'Students sorted by name: A-Z.';
  } else if (filterBy === 'GPA') {
    subtitle = 'Students sorted by GPA: High to Low.';
  } else {
    subtitle = `There are ${filterStudents.length} students filtered by ${filterBy}.`;
  }

  return (
    <div>
      <div className='d-flex col-12 justify-content-between'>
        <div>
          <Filter handleFilter={handleFilterBy} courses={courses} value={filterBy} />
          <h6>{subtitle}</h6>
        </div>
        <div>
          <AddStudent fetchStudents={fetchStudents} />
        </div>
      </div>
      {windowWidth <= 1020 ? (
        <ListMobile students={filterStudents} handleDelete={handleDelete} />
      ) : (
        <ListDesktop students={filterStudents} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default Students;
