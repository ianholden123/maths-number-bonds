import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './Cell.css';
import { quickAnswerTime } from '../../../config/variables'

class Cell extends Component {
    getClassNames() {
        const {x, y, data} = this.props
        let classNames = ['Cell']

        if (x === '-1' || y === '-1') classNames.push('header')
        data && data.answeredCorrectly === true && classNames.push('correct')
        data && data.answeredCorrectly === false && classNames.push('incorrect')
        data && data.timeToAnswer < quickAnswerTime && classNames.push('line')
        
        return classNames.join(' ').trim()
    }

    getStyles() {
        const {data} = this.props
        let styles = {}
        if (data && data.phase && data.phase.colour) styles.backgroundColor = data.phase.colour
        return styles
    }

    render() {
        return (
            <div
                className={this.getClassNames()}
                style={this.getStyles()}
                onClick={() => this.props.handleSelectedCell ? this.props.handleSelectedCell(this.props.data) : false}
            >
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
