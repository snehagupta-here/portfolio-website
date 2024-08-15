
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import AdminHomePage from './Pages/Admin/AdminHomePage';
import Herosection_firstname from './components/Admin/Popups/Herosection_firstname';
import Herosection_lastname from './components/Admin/Popups/Herosection_lastname';
import Herosection_title from './components/Admin/Popups/Herosection_title';
import About_prof from './components/Admin/Popups/Services_description'

function App() {
  return (
         <>
         <Router>
          <Routes>
            {/* <Route path="/" element={<HomePage />} />  */}
            <Route path="/" element={<AdminHomePage />} /> 
            <Route  path='/sample' element={<About_prof />} />    
          </Routes>
         </Router>
         </>
  );
}
export default App;
