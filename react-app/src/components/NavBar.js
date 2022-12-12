
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to='/ask' exact={true} activeClassName='active'>
            Ask Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/questions' exact={true} activeClassName='active'>
            Questions
          </NavLink>
        </li>
        {sessionUser ?
          <li>
            <LogoutButton />
          </li>
          : ''}
      </ul>
    </nav>
  );
}

export default NavBar;
