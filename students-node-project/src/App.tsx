import { useState } from 'react';
import Nav from './components/Nav';
import Students from './components/students/Students';
import students from './students';
import './App.css';

function App() {
  const [search, setSearch] = useState(students);
  const handleSearch = (word: string) => {
    if (word.length === 0) return setSearch(students);
    if (word.length < 3) return;

    const matches = [];
    for (const student of students) {
      if (student.name.toLowerCase().includes(word.toLowerCase())) {
        matches.push(student);
      } else if (student.email.toLowerCase().includes(word.toLowerCase())) {
        matches.push(student);
      } else if (student.phone.toLowerCase().includes(word.toLowerCase())) {
        matches.push(student);
      } else if (student.address.toLowerCase().includes(word.toLowerCase())) {
        matches.push(student);
      } else if (student.courses.join(' ').toLowerCase().includes(word.toLowerCase())) {
        matches.push(student);
      } else if (student.gpa.toString().includes(word)) {
        matches.push(student);
      }
    }
    setSearch(matches);
  };

  return (
    <div className='container'>
      <Nav handleSearch={handleSearch} />
      <p className='text-center mt-4 mb-0 title'>Boston University</p>
      <p className='text-center mb-4 mt-0 subtitle'>Students Records</p>
      <Students students={search} />
    </div>
  );
}

export default App;
