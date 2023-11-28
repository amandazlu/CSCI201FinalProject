import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup/signup';

import EventHome from './pages/EventHome/EventHome';
import EventPage from './pages/EventPage/EventPage';

import ProfileHeader from './pages/ProfileHeader/profileheader';
import Profile from './pages/profilepage/Profile';


function App() {
  return (
    <div className="App"> 
      <Router>
            <Routes>
                {/* <Route exact path='/' element={<Home />} /> */}
                <Route path='/' element={<Login />} />
                <Route path='/sign-up' element={<Signup />} />
                <Route path = '/event-home' element = {<EventHome/>}/>
                <Route path='/event-page' element = {<EventPage/>}/>
                <Route path = '/profile' element = {<Profile/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
