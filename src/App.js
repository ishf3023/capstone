import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Course from './pages/Course';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' exact element={<Home />} />
          <Route path='/' exact element={<Login />} />
          <Route path='/course' exact element={<Course />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
