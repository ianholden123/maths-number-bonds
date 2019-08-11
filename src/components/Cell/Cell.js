import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {

    getClassNames() {
        const {x, y} = this.props
        let classNames = ['Cell']
        if (x === -1 || y === -1) classNames.push('header')
        return classNames.join(' ')
    }

    render() {
        return (
            <div className={this.getClassNames()}>
                {this.props.children}
            </div>
        );
    }
}

export default Cell;
