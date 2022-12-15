import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('')
  const [location, setLocation] = useState('')
  const [full_name, setFull_Name] = useState('')
  const [title, setTitle] = useState('')
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username.toLowerCase(), email.toLowerCase(), password, bio, location, full_name, title));
      if (data) {
        setErrors(data)
      }
    } else {

      return setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value)
  }

  const updateLocation = (e) => {
    setLocation(e.target.value)
  }

  const updateFullName = (e) => {
    setFull_Name(e.target.value)
  }

  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }





  return (
    <>
      <div className='main-sign-up-container'>
        <div className='join-site-container'>
          <h1 className='join-site-text'>Join the Stack Overflow community</h1>
          <div className='advertisement-to-sign-up'>
            <span className='list-of-things-offered'><i className="fa-solid fa-clipboard-question" style={{ color: "rgb(96, 47, 5)" }}></i> Get unstuck — ask a question</span>
            <span className='list-of-things-offered'><i className="fa-solid fa-sort" style={{ color: "rgb(96, 47, 5)" }}></i> Unlock new privileges like voting and answering</span>
            <div className='sign-up-team-advertisement'>
              <span>Collaborate and share knowledge with a private group for FREE.</span>
              <Link className='title-link' style={{ textDecoration: 'none' }} to='/work-in-progress'>Get Stack Overflow for Teams free for up to 50 users.</Link>
            </div>
          </div>
        </div>
        <div className='whole-sign-up-form'>

          <form onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <label>User Name</label>
              <input
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
                required
              ></input>
            </div>
            <div>
              <label>Email</label>
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
                required
              ></input>
            </div>
            <div>
              <label>Biography</label>
              <textarea
                type='text'
                name='bio'
                onChange={updateBio}
                value={bio}
              ></textarea>
            </div>
            <div>
              <label>Location</label>
              <input
                type='text'
                name='location'
                onChange={updateLocation}
                value={location}
              ></input>
            </div>
            <div>
              <label>Full Name</label>
              <input
                type='text'
                name='full_name'
                onChange={updateFullName}
                value={full_name}
                required
              ></input>
            </div>
            <div>
              <label>Title</label>
              <input
                type='text'
                name='title'
                onChange={updateTitle}
                value={title}
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
                required
              ></input>
            </div>
            <div>
              <label>Repeat Password</label>
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
            <button type='submit'>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
