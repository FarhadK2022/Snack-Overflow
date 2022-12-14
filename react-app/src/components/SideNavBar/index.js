import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavBar.css'


const SideNavBar = () => {
    return (
        <div className='test'>
            <h1>SideBar WIP</h1>
            <span className='span-home-link'>
                <Link to='/' exact="true" style={{ textDecoration: 'none' }} className='home-link'>
                    Home
                </Link>
            </span>
            <div>
                <p className='public-text'>PUBLIC</p>
                <span className='span-questions-link'>
                    <Link to='/questions' exact="true" style={{ textDecoration: 'none' }} className='all-questions-link'>
                        🍴Questions
                    </Link>
                </span>
            </div>
        </div >
    )
}


export default SideNavBar
