import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);

  const dispatch = useDispatch();
  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email.toLowerCase(), password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const setDemoUser = () => {
    setEmail('demo@aa.io')
    setPassword('password')
    return dispatch(login(email, password))
  }

  return (
    <div className='main-login-container'>
      <div className='whole-login-form'>

        <form onSubmit={onLogin} className='login-form-all-of-it'>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='login-form-email-div'>
            <label className='login-form-email-label' htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
              required
              className='sign-up-form-inputs'
            />
          </div>
          <div className='login-form-password-div'>
            <label className='login-form-password-label' htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
              required
              className='sign-up-form-inputs'
            />
            <div className='login-form-button-combo-div'>
              <button type='submit' className='login-form-login-button'>Log In</button>
              <button type='submit' className='login-form-demouser-button' onClick={setDemoUser}>Log In as Demo User</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
