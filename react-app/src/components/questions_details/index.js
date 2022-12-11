import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionByIdThunk } from '../../store/question';
import { useParams, useHistory } from 'react-router-dom';
import './questions_details.css'



const QuestionDetails = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { questionId } = useParams()

    const questionInfoObj = useSelector(state => {
        console.log("questionInfoObj state!", state.questionsReducer.question[questionId])
        return state.questionsReducer.question[questionId]
    })


    useEffect(() => {
        dispatch(getQuestionByIdThunk(questionId))
      }, [dispatch, questionId])



    if(!questionInfoObj){
        return null
    }

    return (
        <div>
            <div> Title: {questionInfoObj.title} </div>
            <div> Question: {questionInfoObj.question}</div>
            <div> Tried & Expected: {questionInfoObj.tried_expected} </div>
            <div> Tags: {questionInfoObj.tags} </div>
        </div>
    )


}

export default QuestionDetails
