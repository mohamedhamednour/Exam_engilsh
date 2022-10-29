import './App.css';
import NavBar from './components/NavBar'
import Exam from './components/Exam'
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      //nav bar fixed
  <NavBar /> 
<div className='main'>
{/* Outlet this chage page by route dom   */}
<Outlet />
</div>
  <br></br>



    </div>
  );
}

export default App;
