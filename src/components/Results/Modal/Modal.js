import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    render() {
        const { x, y, answerGiven, timeToAnswer, answeredCorrectly } = this.props.selectedCellData
        return (
            answerGiven ? (
                <div className="Modal">
                    <button className="closeModal" onClick={() => this.props.handleCloseModal()}>x</button>
                    <p className="answeredCorrectly">Answered {answeredCorrectly ? 'correctly' : 'incorrectly'}</p>
                    <p className="problem">{x} + {y}</p>
                    <p className="answerGiven">Answered <strong>{answerGiven}</strong> after <strong>{(timeToAnswer/1000).toFixed(2)} seconds</strong></p>
                </div>
            ): false
        )
    }
}

export default Modal;