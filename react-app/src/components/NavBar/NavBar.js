
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
// import logo from '../../../public/image/SnackoverFlow.png'
import logo from '../../assets/SnackoverflowLogo-removebg-preview.png'
import './NavBar.css';

const NavBar = () => {
  const history = useHistory();

  const loginButton = (e) => {
    e.preventDefault()
    return history.push('/login')
  }

  const signUpButton = (e) => {
    e.preventDefault()
    return history.push('/sign-up')
  }

  const sessionUser = useSelector(state => state.session.user);
  return (
    <nav className='navbar'>
      <div className='left-side'>
        <NavLink exact to="/">
          <div className='left-side'>
            <img src={logo} alt='Logo' className='logo'></img>
          </div>
        </NavLink>
      </div>
      <div className='middle'>
        <SearchBar />
      </div>
      <div className='right'>
        {!sessionUser ?
          <>
            <div className='login-and-sign-up'>
              <button onClick={event => loginButton(event)} className='login-button-navbar'>Log in</button>
              <button onClick={event => signUpButton(event)} className='sign-up-button-navbar'>Sign up</button>
            </div>

          </>
          : ""}
        {/* <span>
          <NavLink to='/ask' exact={true} activeClassName='active'>
            Ask Question
          </NavLink>
        </span> */}

        {sessionUser ?
          <span >
            <LogoutButton />
          </span>
          : ''}
      </div>
    </nav>
  );
}

export default NavBar;
