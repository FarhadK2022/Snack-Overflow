
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
// import logo from '../../../public/image/SnackoverFlow.png'
import logo from '../../assets/SnackoverflowLogo-removebg-preview.png'
import './NavBar.css';

const NavBar = () => {
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
            <span>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </span>
            <span>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </span>
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
