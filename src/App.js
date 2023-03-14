import React from 'react';
import './css/style.css';
import Home from './components/Home';
import Header from './components/header';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import LandmarksTour from './components/landmarksTour';
import DowntownTour from './components/downtownTour';
import Contact from './components/contact';
import Growth from './components/growthTour';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="nav">
          <Header />
          <nav>
            <br /><br /><br /><br /><br /><br /><br />
            <Link to='/'>Home</Link>
            <Link to='/growthTour'>Growth</Link>
            <Link to='/landmarksTour'>Landmarks</Link>
            <Link to='/downtownTour'>Downtown</Link>
            <Link to='/contact'>Contact</Link>
          </nav>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/growthTour' element={<Growth />} />
            <Route path='/landmarksTour' element={<LandmarksTour />} />
            <Route path='/downtownTour' element={<DowntownTour />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
