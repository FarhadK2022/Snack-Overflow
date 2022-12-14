import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, Redirect } from 'react-router-dom'
import { getAllQuestionsThunk } from '../../store/question';



const SplashPage = () => {

    const sessionUser = useSelector(state => state.session.user)
    return (
        <>
            {sessionUser ? <Redirect to='/questions' />
                : <h1>WELCOME TO SNACKOVERFLOW</h1>
            }
        </>
    )
}

export default SplashPage
