import React from "react";
import "./Modal.css";

export interface ModalProps {
  handleCloseModal: () => void
  selectedCellData: {
    answeredCorrectly: boolean
    answerGiven: string
    timeToAnswer: number
    x: string
    y: string
  }
}

const Modal = (props: ModalProps) => {
  const { x, y, answerGiven, timeToAnswer, answeredCorrectly} = props.selectedCellData;
  return (
    answerGiven ? (
      <div className="Modal">
        <button className="closeModal" onClick={() => props.handleCloseModal()}>x</button>
        <p className="answeredCorrectly">Answered {answeredCorrectly ? "correctly" : "incorrectly"}</p>
        <p className="problem">{x} + {y}</p>
        <p className="answerGiven">Answered <strong>{answerGiven}</strong> after{" "}<strong>{(timeToAnswer / 1000).toFixed(2)} seconds</strong></p>
      </div>
    ) : <></>
  );
};

export default Modal;
