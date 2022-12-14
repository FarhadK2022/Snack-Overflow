import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { getAllQuestionsThunk } from '../../store/question';
import './questions.css'
import SideNavBar from '../SideNavBar';

const Questions = () => {
    const dispatch = useDispatch()

    const questionsObj = useSelector(state => {
        return state
    })


    const aQuestion = Object.values(questionsObj.questionsReducer.allQuestions)


    const history = useHistory()

    const askQuestionButton = (e) => {
        e.preventDefault()
        return history.push('/ask')
    }

    useEffect(() => {
        dispatch(getAllQuestionsThunk())
    }, [dispatch])

    if (!aQuestion.length) {
        return null
    }


    return (
        <div className='main-container'>
            <div>
                <SideNavBar />
            </div>

            <div className='questions-div'>
                <div className='top-container'>

                    <div className='all-questions-and-button'>
                        <h1 className='all-questions-header'>All Questions</h1>
                        <button className='ask-question-button' onClick={(event => askQuestionButton(event))}>Ask Question</button>
                    </div>

                    <span className='question-count'>{aQuestion.length} questions</span>
                </div>
                {aQuestion.map((obj) => {
                    return (
                        <div key={obj.id} className="question-detail">
                            <div className='question-detail-container'>
                                <div className='likes-answers'>
                                    <span className='likes-count-question'>{obj.likes} likes</span>
                                    <span className='answer-count'>{obj.answers.length} answers</span>

                                </div>
                                <Link className='title-link' style={{ textDecoration: 'none' }} to={`/questions/${obj.id}`}>
                                    <p>{obj.title}</p>
                                </Link>
                                <p>{obj.question} {obj.tried_expected.substring(0, 24)}...</p>
                                <p className='question-detail-tags'>[{obj.tags}]</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Questions
