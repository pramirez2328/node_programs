import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Students from './components/students/Students';
import './App.css';

interface Student {
  id: number;
  name: string;
  courses: string[];
  gpa: number;
  email: string;
  phone: string;
  address: string;
}

function App() {
  const [allStudents, setAllStudents] = useState<Student[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [value, setValue] = useState('Choose...');

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/students');
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data = await response.json();
      setAllStudents(data);
      setStudents(data);
      console.info('%c---Students were fetched from STUDENTS RECORDS!', 'color: green;');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setValue('Choose...');
    fetchStudents();
  }, []);

  const handleDeleteStudent = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/api/students/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete student');
      }
      fetchStudents();
      console.info('%c---Student was deleted from STUDENTS RECORDS!', 'color: red;');
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (word: string) => {
    if (word.length === 0) {
      setStudents(allStudents);
      setValue('Choose...');
    } else if (word.length >= 3) {
      const matches: Student[] = [];

      for (const student of allStudents) {
        if (student?.name.toLowerCase().includes(word.toLowerCase())) {
          matches.push(student);
        } else if (student?.email.toLowerCase().includes(word.toLowerCase())) {
          matches.push(student);
        } else if (student?.phone.toLowerCase().includes(word.toLowerCase())) {
          matches.push(student);
        } else if (student?.address.toLowerCase().includes(word.toLowerCase())) {
          matches.push(student);
        } else if (student?.courses.join(' ').toLowerCase().includes(word.toLowerCase())) {
          matches.push(student);
        } else if (student?.gpa.toString().includes(word)) {
          matches.push(student);
        }
      }
      setStudents(matches);
    }
  };

  return (
    <div className='p-1 p-md-4'>
      <Nav handleSearch={handleSearch} />
      <p className='text-center mt-4 mb-0 title'>Boston University</p>
      <p className='text-center mb-4 mt-0 subtitle'>Students Records</p>
      <Students students={students} handleDelete={handleDeleteStudent} value={value} />
    </div>
  );
}

export default App;
