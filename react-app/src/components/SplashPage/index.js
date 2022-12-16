import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import './SplashPage.css'
import logo from '../../assets/ezgif.com-gif-maker.gif'


const names = [
    'Chef', 'Nerd With an Opinion', 'Yelper', 'Foodie', 'Internet Dweller', 'Sommelier', 'Food Cart Owner', "Fast Food Purveyor"
]

const SplashPage = () => {
    const [arrTitles, setArrTitles] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setArrTitles(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    const sessionUser = useSelector(state => state.session.user)
    return (
        <>
            {sessionUser ? <Redirect to='/questions' />
                :
                <div className='splash-page-main-container'>
                    <h1 className='splash-page-main-container-h1'>Welcome to SnackOverflow</h1>
                    <br></br>
                    <h2 className='splash-page-main-container-first-h2'>The #1 website to ask questions about food, recipes, read opinions from around the world and much more!</h2>
                    <br></br>
                    <h2 className='splash-page-main-container-second-h2'>Every <span className='arrTitles-span'>{arrTitles}</span> has a tab open to Snack Overflow</h2>
                    <br></br>
                    {/* <span className='line'></span> */}
                    <hr></hr>
                    <div className='splash-image-div'>
                        <div className='random-blurb-one-div'>
                            <h3>10+</h3>
                            <p className='splash-p'>monthly visitors to Snack Overflow</p>
                        </div>
                        <div className='random-blurb-two-div'>
                            <h3>100+ Times</h3>
                            <p className='splash-p'>a critic was able to voice an opinion since 2022</p>
                        </div>
                        <div className='random-blurb-three-div'>
                            <h3>0% ROI</h3>
                            <p className='splash-p'>from companies using Snack Overflow for their menus</p>
                        </div>
                        <div className='random-blurb-four-div'>
                            <h3>5,000+ instances</h3>
                            <p className='splash-p'>Of being a hater can be found Snack Overflow </p>
                        </div>
                    </div>
                    <img className='kool-aid-gif' src={logo} alt="loading..." />
                    <br></br>
                    <div className='splash-page-main-container-content'>Feel free to check out our content by clicking <Link to='/questions' exact='true' className='splash-page-main-container-content-here'>here</Link>.</div>
                    <br></br>
                    <div className='splash-page-main-container-community'>If you are interested in joining our community, click <Link to='/sign-up' exact='true' className='splash-page-main-container-community-here'>here</Link>.</div>
                    <br></br>
                    <div className='splash-page-main-container-creators'>
                        <div className='splash-page-creators-text'>Here are the GitHub links to the creators of Snack Overflow:</div>
                        <br></br>
                        <div className='splash-page-links-div'>
                            <div>
                                <a className='github-link-splash-page' href='https://github.com/FarhadK2022' rel="noreferrer" target="_blank">Farhad Koushan</a>
                            </div>
                            <div>
                                <a className='github-link-splash-page' href='https://github.com/zswanson92' rel="noreferrer" target="_blank">Zack Swanson</a>
                            </div>
                            <div>
                                <a className='github-link-splash-page' href='https://github.com/ricalope' rel="noreferrer" target="_blank">Ricardo Lopez</a>
                            </div>
                            <div>
                                <a className='github-link-splash-page' href='https://github.com/ChangeDL' rel="noreferrer" target="_blank">Douglas Loizzo</a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SplashPage
