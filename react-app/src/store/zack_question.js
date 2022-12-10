const ADD_QUESTION = 'ask/NEW_QUESTION'

const addQuestion = (question) => ({
    type: ADD_QUESTION,
    payload: question
})


export const createQuestion = (payload) => async dispatch => {
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


const questionsReducer = (state = { question: {}}, action) => {


    switch(action.type){
        case ADD_QUESTION:
            console.log("THIS IS ACTION", action)

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
                    console.log("THIS IS NEW STATE", newState)
                    return newState
                }


        break

        default:
            return state;
    }

}

export default questionsReducer
