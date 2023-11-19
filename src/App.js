import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup/signup';

import EventBox from './pages/EventHome/EventBox';
import Header from './pages/Header/Header';
import EventPage from './pages/EventPage/EventPage';


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
                <Route path = '/header' element = {<Header/>}/>
                <Route path='/event-page' element = {<EventPage/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
