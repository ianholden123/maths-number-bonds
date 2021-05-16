import React, { FC } from 'react';
import './Cell.css';
import presentationHelper from '../../../helpers/presentation'
import { ConfigVariableTypes } from '../../../config/variables'
import { PhaseType } from '../../../config/phases'

interface CellData {
    answeredCorrectly: boolean,
    phase: {
        answerGiven: string,
        colour: string,
        phase: PhaseType
    }
    timeToAnswer: number
}
interface CellProps {
    data: CellData
    handleSelectedCell?: (a: CellData) => void
    settings: ConfigVariableTypes
    x: string
    y: string
}

const Cell:FC<CellProps> = (props) => {
    const getClassNames = () => {
        const {x, y, data} = props
        let classNames = ['Cell']

        if (x === '-1' || y === '-1') classNames.push('header')
        data && data.answeredCorrectly === true && classNames.push('correct')
        data && data.answeredCorrectly === false && classNames.push('incorrect')
        data && data.phase && data.phase.colour && classNames.push(presentationHelper.pickTextColorBasedOnBgColor(data.phase.colour))
        
        return classNames.join(' ').trim()
    }

    const { quickAnswerTime } = props.settings
    
    return (
        <div
            className={getClassNames()}
            onClick={() => props.handleSelectedCell ? props.handleSelectedCell(props.data) : false}
        >
            { /* SVG's are being favoured here as a background colour to provide a better outcome when printing to PDF */ }
            <svg id='phase-background'><rect width="100%" height="100%" fill={props.data.phase.colour ? props.data.phase.colour : 'transparent'} /></svg>
            { props.data && props.data.timeToAnswer && props.data.timeToAnswer < quickAnswerTime &&
                <svg id='strikethrough'><line x1="0" y1="0" x2="100%" y2="100%" strokeWidth='4' /></svg>
            }
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default Cell;
