import React from 'react';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
  const history = useHistory()
  const onLogout = async (e) => {

    return history.push('/logout')
  };

  return (
    <button onClick={onLogout} className='logout-button' >
      <i className="fa fa-arrow-right-from-bracket"></i>
    </button>
  )
};

export default LogoutButton;
