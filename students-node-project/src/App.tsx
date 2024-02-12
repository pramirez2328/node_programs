import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav';
import List from './components/List';

function App() {
  return (
    <div className='container'>
      <Nav />
      <List />
    </div>
  );
}

export default App;
