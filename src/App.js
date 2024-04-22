import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Home2 from './Components/Home2';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home2/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
