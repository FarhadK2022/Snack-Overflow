import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllQuestionsThunk } from '../../store/question';
import './questions.css'

const Questions = () => {
    const dispatch = useDispatch()

    const questionsObj = useSelector(state => {
        return state
    })

    console.log("questionsObj", questionsObj)
    const aQuestion = Object.values(questionsObj.questionsReducer.allQuestions)

    console.log("aQuestion", aQuestion)

    useEffect(() => {
        dispatch(getAllQuestionsThunk())
    }, [dispatch])

    // if(!aQuestion.length){
    //     return null
    // }


    return (
        <div className='questions-div'>
            <h2>{aQuestion.map((obj) => {
                return(
                    <div>
                        <Link style={{textDecoration: 'none'}} to={`/questions/${obj.id}`}>
                        <p>Title: {obj.title}</p>
                        {/*

                         */}
                        </Link>
                        <p>Question Body: {obj.question}</p>
                        <p>Tried & Expected: {obj.tried_expected}</p>
                        <p>Tags: {obj.tags}</p>
                    </div>
                )
            })}</h2>
        </div>
    )
}


export default Questions
