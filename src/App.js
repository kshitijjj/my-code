import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
