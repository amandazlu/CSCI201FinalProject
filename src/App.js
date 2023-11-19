import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup/signup';

import EventBox from './pages/EventHome';
import Header from './pages/Header';


function App() {
  return (
    <div className="App"> 
      <Router>
            <Navbar />
            <Routes>
                {/* <Route exact path='/' element={<Home />} /> */}
                <Route path='/log-in' element={<Login />} />
                <Route path='/sign-up' element={<Signup />} />
                <Route path='/log-in' element={<Login />} />
                <Route path = '/event-box' element = {<EventBox/>}/>
                <Route path = 'header' element = {<Header/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
