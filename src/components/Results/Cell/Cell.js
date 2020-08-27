import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './Cell.css';
import presentationHelper from '../../../helpers/presentation'

class Cell extends Component {
    getClassNames() {
        const {x, y, data} = this.props
        let classNames = ['Cell']

        if (x === '-1' || y === '-1') classNames.push('header')
        data && data.answeredCorrectly === true && classNames.push('correct')
        data && data.answeredCorrectly === false && classNames.push('incorrect')
        data && data.phase && data.phase.colour && classNames.push(presentationHelper.pickTextColorBasedOnBgColor(data.phase.colour))
        
        return classNames.join(' ').trim()
    }

    render() {
        const { quickAnswerTime } = this.props.settings
        
        return (
            <div
                className={this.getClassNames()}
                onClick={() => this.props.handleSelectedCell ? this.props.handleSelectedCell(this.props.data) : false}
            >
                { /* SVG's are being favoured here as a background colour to provide a better outcome when printing to PDF */ }
                <svg id='phase-background'><rect width="100%" height="100%" fill={this.props.data.phase.colour ? this.props.data.phase.colour : 'transparent'} /></svg>
                { this.props.data && this.props.data.timeToAnswer && this.props.data.timeToAnswer < quickAnswerTime &&
                    <svg id='strikethrough'><line x1="0" y1="0" x2="100%" y2="100%" strokeWidth='4' /></svg>
                }
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Cell.propTypes = {
    data: PropTypes.shape({
        phase: PropTypes.shape({
            colour: PropTypes.string,
            answeredCorrectly: PropTypes.bool,
            answerGiven: PropTypes.string,
            phase: PropTypes.shape({
                colour: PropTypes.string,
                description: PropTypes.string,
                id: PropTypes.number,
                name: PropTypes.string,
                number: PropTypes.number
            }),
            timeToAnswer: PropTypes.number
        })
    }),
    handleSelectedCell: PropTypes.func
}

export default Cell;
