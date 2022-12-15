import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import './LogoutConfirm.css'

const LogoutConfirm = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user)



    const onLogout = async (e) => {
        e.preventDefault()
        await dispatch(logout());
        return history.push('/')
    };

    const cancelButton = (e) => {
        e.preventDefault()
        return history.push('/questions')
    }

    return (
        <>
            {!sessionUser ? <Redirect to='/' />
                :
                <div className='super-parent-div'>

                    <div className='main-logout-container'>
                        <div className='logout-message'>
                            <span className='first-logout-message'>Clicking “Log out” will log you out</span>
                            <span>Before you go here are links for the creators</span>
                        </div>
                        <div className='sub-logout-container'>
                            <div className='creator-links-logout'>
                                <a className='github-link' href='https://github.com/FarhadK2022' target="_blank">Farhad Koushan</a>
                                <a className='github-link' href='https://github.com/zswanson92' target="_blank">Zack Swanson</a>
                                <a className='github-link' href='https://github.com/ricalope' target="_blank">Ricardo Lopez</a>
                                <a className='github-link' href='https://github.com/ChangeDL' target="_blank">Douglas Loizzo</a>
                            </div>
                            <div className='logout-cancel-buttons'>
                                <button className='logout-button-confirm' onClick={event => onLogout(event)}>Logout</button>
                                <button className='cancel-link' onClick={event => cancelButton(event)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default LogoutConfirm
