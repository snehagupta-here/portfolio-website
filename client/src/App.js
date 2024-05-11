import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AdminFooter from './components/Admin/AdminFooter';
import HomePage from './pages/HomePage';
import AdminHomePage from './pages/admin/AdminHomePage';
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
