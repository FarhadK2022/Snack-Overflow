const ADD_QUESTION = 'ask/NEW_QUESTION'
const GET_QUESTIONS = 'get/ALL_QUESTIONS'
const EDIT_QUESTION = 'edit/ONE_QUESTION'
const DELETE_QUESTION = 'delete/ONE_QUESTION'

const addQuestion = (question) => ({
    type: ADD_QUESTION,
    payload: question
})

const allQuestions = (questions) => ({
    type: GET_QUESTIONS,
    payload: questions
})

const editQuestion = (question) => ({
    type: EDIT_QUESTION,
    payload: question
})

const deleteQuestion = (question) => ({
    type: DELETE_QUESTION,
    payload: question
})

export const deleteQuestionThunk = (payload) => async dispatch => {
    const { questionId } = payload
    const response = await fetch(`/api/questions/${questionId}`, {
        method: 'DELETE'
    })

    if(response.ok){
        const question = await response.json()

        dispatch(deleteQuestion(question))
    }
}

export const editQuestionThunk = (payload) => async dispatch => {
    const { questionId, title, question, tried_expected, tags } = payload
    const response = await fetch(`/api/questions/${questionId}`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, question, tried_expected, tags })
    })

    if(response.ok){
        const question = await response.json()

        dispatch(editQuestion(question))
    }
}

export const createQuestionThunk = (payload) => async dispatch => {
    const { title, question, tried_expected, tags } = payload
    const response = await fetch('/api/ask', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, question, tried_expected, tags })
    })

    if(response.ok){
        const question = await response.json()

        dispatch(addQuestion(question))
    }
}

export const getAllQuestionsThunk = () => async dispatch => {
    const res = await fetch('/api/questions');
    if (res.ok) {
        const data = await res.json()
        dispatch(allQuestions(data))
        return data
    }
}

// const normalizeData = (data) => {
//     const res = {}
//     for (let key in data) {
//         res[data[key].id] = data[key]
//     }
//     return res
// }


const questionsReducer = (state = { question: {}, allQuestions: {} }, action) => {


    switch(action.type){
        case ADD_QUESTION:

            // console.log("THIS IS ACTION", action)

                if(!state[action.id]){
                    const newState = {
                        ...state,
                        [action.payload.id]:{
                            id: action.payload.id,
                            title: action.payload.title,
                            question: action.payload.question,
                            tried_expected: action.payload.tried_expected,
                            tags: action.payload.tags
                        }
                    };
                    // console.log("THIS IS NEW STATE", newState)
                    return newState
                }



        case GET_QUESTIONS: {
            // const newState = { ...state, allQuestions: { ...state.allQuestions } }
            const newState = { ...action }
            console.log("THIS IS NEW STATE", newState)
            // console.log("THIS IS ACTION.QUESTIONS", action)
            newState.allQuestions = newState.payload
            console.log("After change", newState)
            return newState
        }

        default:
            return state;
    }

}

export default questionsReducer
