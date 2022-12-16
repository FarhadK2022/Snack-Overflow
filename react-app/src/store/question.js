const ADD_QUESTION = 'ask/NEW_QUESTION'
const GET_QUESTIONS = 'get/ALL_QUESTIONS'
const EDIT_QUESTION = 'edit/ONE_QUESTION'
const DELETE_QUESTION = 'delete/ONE_QUESTION'
const GET_QUESTION = 'get/ONE_QUESTION'
const ADD_LIKE = 'add/ONE_LIKE'
const REMOVE_LIKE = "remove/ONE_LIKE"

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

const getQuestionById = (question) => ({
    type: GET_QUESTION,
    payload: question
})

const addLike = (like) => ({
    type: ADD_LIKE,
    payload: like
})

const removeLike = (like) => ({
    type: REMOVE_LIKE,
    payload: like
})

// export const deleteQuestionThunk = (payload) => async dispatch => {
//     const { questionId } = payload
//     const response = await fetch(`/api/questions/${questionId}`, {
//         method: 'DELETE'
//     })

//     if(response.ok){
//         const question = await response.json()

//         dispatch(deleteQuestion(question))
//     }
// }

export const addLikeThunk = (questionId, userId) => async dispatch => {
    // const { questionId, user_id } = payload
    const response = await fetch(`/api/questions/${questionId}/like`)

    if (response.ok) {
        const like = await response.json()
        dispatch(addLike(like))
    }
}

export const removeLikeThunk = (questionId, userId) => async dispatch => {
    // const { questionId, user_id } = payload
    const response = await fetch(`/api/questions/${questionId}/unlike`)

    if (response.ok) {
        const like = await response.json()
        dispatch(removeLike(like))
    }
}



export const deleteQuestionThunk = (questionId) => async dispatch => {
    // questionId = +questionId

    const response = await fetch(`/api/questions/${questionId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(deleteQuestion(questionId))
    }
}

export const editQuestionThunk = (payload) => async dispatch => {
    const { questionId, title, question, tried_expected, tags } = payload
    const response = await fetch(`/api/questions/${questionId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, question, tried_expected, tags })
    })

    if (response.ok) {
        const question = await response.json()
        dispatch(editQuestion(question))
        return question
    }
}

export const createQuestionThunk = (payload) => async dispatch => {
    const { title, question, tried_expected, tags } = payload
    const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, question, tried_expected, tags })
    })

    if (response.ok) {
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

export const getQuestionByIdThunk = (questionId) => async dispatch => {
    const response = await fetch(`/api/questions/${questionId}`)

    if (response.ok) {
        const question = await response.json()
        dispatch(getQuestionById(question))
        return question
    }
}

const initialState = { question: {}, allQuestions: {} }
const questionsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_QUESTION: {



            if (!state[action.id]) {
                const newState = {
                    ...state,
                    [action.payload.id]: {
                        id: action.payload.id,
                        title: action.payload.title,
                        question: action.payload.question,
                        tried_expected: action.payload.tried_expected,
                        tags: action.payload.tags
                    }
                };

                return newState
            }
            break
        }



        case GET_QUESTIONS: {

            const newState = Object.assign({}, state)
            newState.allQuestions = {}
            const question = (action.payload)
            newState.allQuestions = question
            return newState
        }

        case GET_QUESTION: {
            const newState = { ...state }
            newState.question = {}
            const question = action.payload
            newState.question = question
            return newState
        }


        case DELETE_QUESTION: {
            const newState = { ...state }
            delete newState.allQuestions[action.payload]
            return newState
        }

        case EDIT_QUESTION:

            return {
                ...state,
                [action.payload.id]: action.payload
            }

        default:
            return state;
    }

}

export default questionsReducer
