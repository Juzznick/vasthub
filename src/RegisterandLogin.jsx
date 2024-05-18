import React, { useState } from 'react';
import { database } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


function RegisterandLogin() {
  const [login, setLogin] = useState(false)


  const history = useNavigate()


  const handleSubmit = (e, type) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    if (type === 'signup') {
      createUserWithEmailAndPassword(database, email, password).then(data => {
        console.log(data, 'authData')
        history('/home')
      }).catch(err => {
        alert(err.code)
        setLogin(true)
      })
    }
    else {
      signInWithEmailAndPassword(database, email, password).then(data => {
        console.log(data, 'authData')
        history('/home')
      }).catch(err => {
        alert(err.code)
      })
    }

  }
  const handleReset=()=>{
    history("/reset");
  }

  return (
    <div className='Login-Main'>
      <div className='Login'>
        <div className='Login-box'>
          <div className='regpg-sgninsgnup'>
            <div onClick={() => setLogin(false)} className={login === false ? 'activeColor' : 'pointer'}  >SignUp</div>
            <div onClick={() => setLogin(true)} className={login === true ? 'activeColor' : 'pointer'}  >SignIn</div>
          </div>
          <h1>{login ? 'SignIn' : 'SignUp'}</h1>
          <form onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}>
            <input name='email' placeholder='Email' />
            <input name='password' type="password" placeholder='Password' />
            <p>The Password should be min 6 characters</p>
            <p className="forgot-p" onClick={handleReset}>Forgot Password?</p>
            <button>{login ? 'SignIn' : 'SignUp'}</button>
          </form>

        </div>
      </div>

      <div className='Login'>
        <img alt="sgpa" src="loginimg.png"></img>
      </div>
    </div>


  )
}
export default RegisterandLogin;