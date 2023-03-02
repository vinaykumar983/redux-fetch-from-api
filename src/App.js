import {Route,Router, Routes} from 'react-router-dom'
import Count from './components/count';
import Users from './components/users';
import { Link ,NavLink} from 'react-router-dom';
function App() {
 
  return (
    <div className='text-center'>
      <div>
        <NavLink to="/">Users</NavLink>
        </div>
        <div>
        <NavLink to="/count">Count</NavLink>
        </div>
        <Routes>
    <Route path="" element={<Users/>}/>
    <Route path="count"  element={<Count/>}/>
  </Routes>
    </div>
  );
}

export default App;
