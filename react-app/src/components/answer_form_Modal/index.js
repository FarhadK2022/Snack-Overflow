import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateAnswerForm from "./CreateAnswerForm";
import "./answer_form.css";

function CreateAnswerFormModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true)
  }
  return (
    <>
      <button className="button" onClick={(event) => openModal(event)}>Create Answer</button>
      {showModal ?
        <Modal onClose={() => setShowModal(false)}>
          <CreateAnswerForm setShowModal={setShowModal} />
        </Modal>
        : ""}
    </>
  );
}

export default CreateAnswerFormModal;
