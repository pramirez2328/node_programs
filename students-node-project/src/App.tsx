import Nav from './components/Nav';
import Students from './components/students/Students';
import students from './students';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Nav />
      <p className='text-center mt-4 mb-0 title'>Boston University</p>
      <p className='text-center mb-4 mt-0 subtitle'>Students Records</p>
      <Students students={students} />
    </div>
  );
}

export default App;
