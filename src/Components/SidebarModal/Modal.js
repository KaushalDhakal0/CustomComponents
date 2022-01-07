import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
// import { AppContext } from "../../context";
const Modal = () => {
  return (
    <div className={`modal-overlay `}>
      <div className="modal-container">
        <h1>Modal Content</h1>
        <button className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
