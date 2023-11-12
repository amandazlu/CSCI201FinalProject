import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup/signup';


function App() {
  return (
    <div className="App"> 
      <Router>
            <Navbar />
            <Routes>
                {/* <Route exact path='/' element={<Home />} /> */}
                <Route path='/log-in' element={<Login />} />
                <Route path='/sign-up' element={<Signup />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
