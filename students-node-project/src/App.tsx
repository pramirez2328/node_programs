import Nav from './components/Nav';
import Students from './components/students/Students';
import students from './students';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Nav />
      <h2 className='text-center mt-4'>Boston University</h2>
      <Students students={students} />
    </div>
  );
}

export default App;
