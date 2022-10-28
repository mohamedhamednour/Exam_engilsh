import './App.css';
import NavBar from './components/NavBar'
import Exam from './components/Exam'
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
  <NavBar /> 
<div className='main'>
<Outlet />
</div>
  <br></br>

    </div>
  );
}

export default App;
