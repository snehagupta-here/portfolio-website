
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import AdminHomePage from './Pages/Admin/AdminHomePage';

function App() {
  return (
         <>
         <Router>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/admin" element={<AdminHomePage />} /> 
           
          </Routes>
         </Router>
         </>
  );
}
export default App;
