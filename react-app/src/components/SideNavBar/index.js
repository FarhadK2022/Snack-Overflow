import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavBar.css'


const SideNavBar = () => {
    return (
        <div className='side-bar-container'>
            <div className='span-home-link'>
                <Link to='/' exact="true" style={{ textDecoration: 'none' }} className='home-link'>
                    Home
                </Link>
            </div>
            <div className='public-links-container'>
                <p className='public-text'>PUBLIC</p>
                <div className='public-links'>
                    <span className='span-questions-link'>
                        <Link to='/questions' exact="true" style={{ textDecoration: 'none' }} className='all-questions-link'>
                            <div className='question-and-emoticon'>
                                <span>🍽 </span>
                                <span className='side-bar-question-text'>Questions</span>
                            </div>
                        </Link>
                    </span>
                    <span className='sidebar-links-not-question'>
                        <Link to='/work-in-progress' exact="true" style={{ textDecoration: 'none' }} className='all-questions-link'>
                            Tags
                        </Link>
                    </span>
                    <span className='sidebar-links-not-question'>
                        <Link to='/work-in-progress' exact="true" style={{ textDecoration: 'none' }} className='all-questions-link'>
                            Users
                        </Link>
                    </span>
                    <span className='sidebar-links-not-question'>
                        <Link to='/work-in-progress' exact="true" style={{ textDecoration: 'none' }} className='all-questions-link'>
                            About
                        </Link>
                    </span>
                </div>
            </div>
            <div className='collectives-container'>
                <p className='public-text'>COLLECTIVES</p>
                <div className='public-links'>
                    <span className='span-questions-link'>
                        <Link to='/work-in-progress' exact="true" style={{ textDecoration: 'none' }} className='explore-collectives-link'>
                            <div className='explore-collectives-text'>
                                <div className='the-word-explore'>✴️Explore</div>
                                <div className='the-word-collective'> Collectives</div>
                            </div>
                        </Link>
                    </span>
                </div>
            </div>
            <div className='collectives-container'>
                <p className='public-text'>TEAMS</p>
                <div className='public-links'>
                    <span className='span-questions-link'>
                        <Link to='/work-in-progress' exact="true" style={{ textDecoration: 'none' }} className='explore-collectives-link'>
                            <div className='explore-collectives-text'>
                                <div>💼</div>
                                <div>Create</div>
                                <div>Free</div>
                                <div>Team</div>
                            </div>
                        </Link>
                    </span>
                </div>
            </div>
        </div >
    )
}


export default SideNavBar
