import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, Redirect } from 'react-router-dom'
import { getAllQuestionsThunk } from '../../store/question';
import './SplashPage.css'


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
                    <div className='splash-page-main-container-content'>Feel free to check out our content by clicking <Link to='/questions' exact='true' className='splash-page-main-container-content-here'>here</Link>.</div>
                            <br></br>
                    <div className='splash-page-main-container-community'>If you are interested in joining our community, click <Link to='/sign-up' exact='true' className='splash-page-main-container-community-here'>here</Link>.</div>
                            <br></br>
                    <div className='splash-page-main-container-creators'>
                        <div className='splash-page-creators-text'>Here are the GitHub links to the creators of Snack Overflow:</div>
                            <br></br>
                        <div className='splash-page-links-div'>
                            <div>
                            <a className='github-link-splash-page' href='https://github.com/FarhadK2022' target="_blank">Farhad Koushan</a>
                            </div>
                            <div>
                            <a className='github-link-splash-page' href='https://github.com/zswanson92' target="_blank">Zack Swanson</a>
                            </div>
                            <div>
                            <a className='github-link-splash-page' href='https://github.com/ricalope' target="_blank">Ricardo Lopez</a>
                            </div>
                            <div>
                            <a className='github-link-splash-page' href='https://github.com/ChangeDL' target="_blank">Douglas Loizzo</a>
                            </div>
                    </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SplashPage
