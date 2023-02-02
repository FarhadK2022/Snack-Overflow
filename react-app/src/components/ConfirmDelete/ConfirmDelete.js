import { useParams, useHistory } from "react-router-dom";
// import { deleteBusinessThunk } from "../../store/business";
import { deleteQuestionThunk } from "../../store/question";
import { useDispatch } from "react-redux";
// import { useState } from 'react';
import './ConfirmDelete.css'

const ConfirmDelete = ({ confirm, setconfirm }) => {
    const dispatch = useDispatch();
    const { questionId } = useParams();
    const history = useHistory();

    // const [confirm, setConfirm] = useState(false)

    const deleteAQuestion = (e, id) => {
        e.preventDefault();


        dispatch(deleteQuestionThunk(id))
        return setTimeout(function () { history.push('/questions'); }, 10);
    }

    return (
        <div className="main-modal-container-confirm-delete">
            <div className="inside-confirm-delete-div">
                <p className="p-on-confirm-delete-modal">Are you SURE you want to delete your question? This will destroy all data associated, including answers, likes & up/down votes.</p>
            <div className="two-confirm-delete-buttons-div">
                <button className="confirm-delete-buttons" onClick={(event) => deleteAQuestion(event, questionId)}>Yes</button>
                <button className="confirm-delete-buttons" onClick={setconfirm}>No</button>
            </div>
            </div>
        </div>
    )
}

export default ConfirmDelete;
