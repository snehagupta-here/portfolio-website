
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import AdminHomePage from './Pages/Admin/AdminHomePage';
import AdminCreate from './components/Admin/AdminCreate';
import AdminContact from './components/Admin/AdminContact';
import AdminTestimonial from './components/Admin/AdminTestimonial';
import AdminService from './components/Admin/AdminService';
import AdminWork from './components/Admin/AdminWork';
import AdminHero from './components/Admin/AdminHero';
import AdminAbout from './components/Admin/AdminAbout';
function App() {
  return (
         <>
         <Router>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/admin" element={<AdminHomePage />} /> 
            <Route path="/firstnameupdate" element={<AdminHomePage />} /> 
            

            <Route path="/admincreate" element={<AdminCreate />} /> 
            <Route path="/admincontact" element={<AdminContact />} /> 
            <Route path="/admintestimonial" element={<AdminTestimonial />} /> 
            <Route path="/adminservice" element={<AdminService />} />
            <Route path="/adminwork" element={<AdminWork />} />  
            <Route path="/adminhero" element={<AdminHero />} />  
            <Route path="/adminabout" element={<AdminAbout />} /> 
          </Routes>
         </Router>
         </>
  );
}
export default App;
