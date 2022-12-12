import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateAnswerForm from "./CreateAnswerForm";
import "./answer_form.css";

function CreateAnswerFormModal() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal)
  return (
    <>
      <button className="button" onClick={() => setShowModal(true)}>Create Answer</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateAnswerForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateAnswerFormModal;
