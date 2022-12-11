import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllQuestionsThunk } from '../../store/question';
import './questions.css'

const Questions = () => {
    const dispatch = useDispatch()

    const questionsObj = useSelector(state => {
        console.log("THIS IS STATE!", state.questionsReducer.allQuestions)
        let arr = []

        for(let x in state.questionsReducer.allQuestions){
            console.log("THIS IS X", x)
            arr.push(state.questionsReducer.allQuestions[x])

        }
        console.log("THIS IS ARR", arr)


        return state
    })

    // const aQuestion = Object.values(questionsObj)

    useEffect(() => {
        dispatch(getAllQuestionsThunk())
    }, [dispatch])

    // if(!aQuestion.length){
    //     return null
    // }


    return (
        <div className='questions-div'>

            <h1></h1>
        </div>
    )
}


export default Questions
