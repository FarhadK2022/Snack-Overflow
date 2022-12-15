import React from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { logout } from '../../store/session';
import './LogoutButton.css'

const LogoutButton = () => {
  // const dispatch = useDispatch()
  const history = useHistory()
  const onLogout = async (e) => {

    return history.push('/logout')
  };

  return (
    <button onClick={onLogout} className='logout-button' >
      <i className="fa fa-arrow-right-from-bracket fa-lg"></i>
    </button>
  )
};

export default LogoutButton;
