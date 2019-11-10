import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    getClassNames() {
        const {x, y} = this.props
        let classNames = ['Cell']
        if (x === '-1' || y === '-1') classNames.push('header')
        return classNames.join(' ')
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
                {this.props.children}
            </div>
        );
    }
}

export default Cell;
