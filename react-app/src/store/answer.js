const ADD_ANSWER = 'ask/NEW_ANSWER'
const GET_ANSWERS = 'get/ALL_ANSWERS'
const EDIT_ANSWER = 'edit/ONE_ANSWER'
const DELETE_ANSWER = 'delete/ONE_ANSWER'
const ADD_UP = 'add/UPVOTE'
const ADD_DOWN = 'add/DOWNVOTE'

const addAnswer = (answer) => ({
    type: ADD_ANSWER,
    payload: answer
})

const allAnswers = (answers) => ({
    type: GET_ANSWERS,
    payload: answers
})

const editAnswer = (answer) => ({
    type: EDIT_ANSWER,
    payload: answer
})

const deleteAnswer = (answer) => ({
    type: DELETE_ANSWER,
    payload: answer
})

const addAnswerUpvote = (vote) => ({
    type: ADD_UP,
    payload: vote
})

const addAnswerDownvote = (vote) => ({
    type: ADD_DOWN,
    payload: vote
})

export const addUpvoteThunk = (answerid, userId) => async dispatch => {
    const response = await fetch(`/api/answers/${answerid}/upvote`)

    if (response.ok) {
        const upvote = await response.json()
        dispatch(addAnswerUpvote(upvote))
        return upvote
    }
}

export const addDownvoteThunk = (answerid, userId) => async dispatch => {
    const response = await fetch(`/api/answers/${answerid}/downvote`)

    if (response.ok) {
        const downvote = await response.json()
        dispatch(addAnswerDownvote(downvote))
        return downvote
    }
}


export const deleteAnswerThunk = (answerid) => async dispatch => {

    const response = await fetch(`/api/answers/${answerid}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        const answer = await response.json()

        dispatch(deleteAnswer(answer))
    }
}

export const editAnswerThunk = (payload) => async dispatch => {

    const { body, answerid } = payload

    const response = await fetch(`/api/answers/${answerid}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ body })
    })

    if (response.ok) {
        const answer = await response.json()

        dispatch(editAnswer(answer))
    }
}


export const createAnswerThunk = (payload) => async dispatch => {
    const { questionId, user_id, body } = payload

    const response = await fetch(`/api/ask/${questionId}/answers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ questionId, user_id, body })
    })

    if (response.ok) {
        const answer = await response.json()

        dispatch(addAnswer(answer))
        return answer
    }
}

export const getAllAnswersThunk = () => async dispatch => {
    const res = await fetch(`/api/answers`);
    if (res.ok) {
        const answers = await res.json()
        dispatch(allAnswers(answers))
        return answers
    }
}


const initialState = { allAnswers: {} }
const answersReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_ANSWER: {

            if (!state[action.id]) {
                const newState = {
                    ...state,
                    [action.payload.id]: {
                        id: action.payload.id,
                        body: action.payload.body
                    }
                };
                return newState
            }
            break
        }

        case GET_ANSWERS: {
            const newState = Object.assign({}, state)
            newState.allAnswers = {}
            const answer = (action.payload)
            newState.allAnswers = answer
            return newState
        }

        case DELETE_ANSWER: {
            const newState = { ...state, allAnswers: { ...state.allAnswers } }
            delete newState.allAnswers[action.payload];
            return newState;
        }

        case EDIT_ANSWER:
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        default:
            return state;
    }

}

export default answersReducer
