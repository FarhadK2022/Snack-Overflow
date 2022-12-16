import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [full_name, setFull_Name] = useState('')
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const bio = ''
  const location = ''
  const title = ''
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


  const updateFullName = (e) => {
    setFull_Name(e.target.value)
  };

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
          <h1 className='join-site-text'>Join the Snack Overflow community</h1>
          <div className='advertisement-to-sign-up'>
            <span className='list-of-things-offered'><i className="fa-solid fa-clipboard-question" style={{ color: "rgb(96, 47, 5)" }}></i> Get unstuck — ask a question</span>
            <span className='list-of-things-offered'><i className="fa-solid fa-sort" style={{ color: "rgb(96, 47, 5)" }}></i> Unlock new privileges like voting and answering</span>
            <div className='sign-up-team-advertisement'>
              <span className='bottom-of-sign-up-text'>Collaborate and share knowledge with a private group for FREE.</span>
              <Link className='title-link' style={{ textDecoration: 'none' }} to='/work-in-progress'>Get Snack Overflow for Teams free for up to 50 users.</Link>
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
            <div className='sign-up-form-fields'>
              <label className='sign-up-form-fields-label'>Full name</label>
              <input
                type='text'
                name='full_name'
                onChange={updateFullName}
                value={full_name}
                required
                className='sign-up-form-inputs'
              ></input>
            </div>
            <div className='sign-up-form-fields'>
              <label className='sign-up-form-fields-label'>Display name</label>
              <input
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
                required
                className='sign-up-form-inputs'
              ></input>
            </div>
            <div className='sign-up-form-fields'>
              <label className='sign-up-form-fields-label'>Email</label>
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
                required
                className='sign-up-form-inputs'
              ></input>
            </div>


            <div className='sign-up-form-fields'>
              <div className='password-field-for-sign-up'>

                <label className='sign-up-form-fields-label'>Password</label>
                <input
                  type='password'
                  name='password'
                  onChange={updatePassword}
                  value={password}
                  required
                  className='sign-up-form-inputs'
                ></input>
                <p className='password-requirement'>Passwords must contain at least eight characters</p>
              </div>
            </div>
            <div className='sign-up-form-fields' >
              <label className='sign-up-form-fields-label'>Repeat Password</label>
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
                className='sign-up-form-inputs'
              ></input>
            </div>
            <button className='sign-up-button-submit' type='submit'>Sign Up</button>
            <div className='sign-up-terms-of-service'>
              <span className='bottom-of-sign-up-text'>By clicking “Sign up”, you agree to our</span>
              <Link to='/work-in-progress' className='title-link' style={{ textDecoration: 'none' }}> terms of service, privacy policy</Link> <span className='bottom-of-sign-up-text'>and</span> <Link to='/work-in-progress' className='title-link' style={{ textDecoration: 'none' }}>cookie policy</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
