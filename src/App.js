
import './App.css';
import Hero from './hero';
import Cgpa from './cgpa';
import Sgpa from './sgpa';
import Attendex from './attendex';
import Footer from './footer';
import RegisterandLogin from './RegisterandLogin';
import { BrowseRouter, Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';
import Pomodoro from './pomodoro-components/pomodoroooo'
import Todo from './todolist'
import ForgotPassword from './forgotpassword.jsx';
import Contact from './contact.jsx';

import '@fortawesome/fontawesome-free/css/all.min.css';










function App() {
  const toggleNavbar = () => {
    var nav = document.getElementById('navBar');
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/reset' element={< ForgotPassword />}></Route>
        <Route path='/' element={<RegisterandLogin />}></Route>
        <Route path='/home' element={
          <div className='navDiv'>
            <button onClick={toggleNavbar} className='navdropbtn'>LIST</button>
            <nav>
              <ul className='navBar' id="navBar" style={{ display: 'flex' }}>
                <li><NavLink to="/home">HOME</NavLink></li>
                <li><NavLink to="/attendex">ATTENDEX</NavLink></li>
                <li><NavLink to="/gpa">GPA</NavLink></li>
                <li><NavLink to="/pomodoro">POMODORO</NavLink></li>
                <li><NavLink to="/todo">TODO</NavLink></li>
              </ul>
            </nav><Hero /><Contact /> <Footer/>
          </div>
        }></Route>
        <Route path='/attendex' element={<div className='navDiv'>
          <button onClick={toggleNavbar} className='navdropbtn'>LIST</button>
          <nav>
            <ul className='navBar' id="navBar" style={{ display: 'flex' }}>
              <li><NavLink to="/home">HOME</NavLink></li>
              <li><NavLink to="/attendex">ATTENDEX</NavLink></li>
              <li><NavLink to="/gpa">GPA</NavLink></li>
              <li><NavLink to="/pomodoro">POMODORO</NavLink></li>
              <li><NavLink to="/todo">TODO</NavLink></li>
            </ul>
          </nav><Attendex />
        </div>}></Route>
        <Route path='/gpa' element={<div className='navDiv'>
          <button onClick={toggleNavbar} className='navdropbtn'>LIST</button>
          <nav>
            <ul className='navBar' id="navBar" style={{ display: 'flex' }}>
              <li><NavLink to="/home">HOME</NavLink></li>
              <li><NavLink to="/attendex">ATTENDEX</NavLink></li>
              <li><NavLink to="/gpa">GPA</NavLink></li>
              <li><NavLink to="/pomodoro">POMODORO</NavLink></li>
              <li><NavLink to="/todo">TODO</NavLink></li>
            </ul>
          </nav><Cgpa /><Sgpa />
        </div>}></Route>
        <Route path='/pomodoro' element={<div className='navDiv'>
          <button onClick={toggleNavbar} className='navdropbtn'>LIST</button>
          <nav>
            <ul className='navBar' id="navBar" style={{ display: 'flex' }}>
              <li><NavLink to="/home">HOME</NavLink></li>
              <li><NavLink to="/attendex">ATTENDEX</NavLink></li>
              <li><NavLink to="/gpa">GPA</NavLink></li>
              <li><NavLink to="/pomodoro">POMODORO</NavLink></li>
              <li><NavLink to="/todo">TODO</NavLink></li>
            </ul>
          </nav><Pomodoro />
        </div>}></Route>
        <Route path='/todo' element={
          <div className='navDiv'>
            <button onClick={toggleNavbar} className='navdropbtn'>LIST</button>
            <nav>
              <ul className='navBar' id="navBar" style={{ display: 'flex' }}>
                <li><NavLink to="/home">HOME</NavLink></li>
                <li><NavLink to="/attendex">ATTENDEX</NavLink></li>
                <li><NavLink to="/gpa">GPA</NavLink></li>
                <li><NavLink to="/pomodoro">POMODORO</NavLink></li>
                <li><NavLink to="/todo">TODO</NavLink></li>
              </ul>
            </nav><Todo />
          </div>
        }></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;