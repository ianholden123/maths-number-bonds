import React, { Component } from 'react';
import Cell from '../Cell/Cell'
import phases from '../../config/phases'
import cellGenerator from '../../helpers/cellGenerator'
import './Grid.css';

class Grid extends Component {

  render() {
    const output = []
    const cells = cellGenerator.generateCellsFromPhases(phases)

    for (let y = 0; y < cells.length; y++) {
      for (let x = 0; x < cells[y].length; x++) {
        
        output.push(
          <Cell key={`${y},${x}`} x={x} y={y}>
            { x === -1 && y === -1 ? '+' : '' }
            { x === -1 && y !== -1 ? y : '' }
            { y === -1 && x !== -1 ? x : '' }
            { x > -1 && y > -1 ? `${y} + ${x}` : '' }
          </Cell>
        )
      }
    }

    return (
      <div className="Grid">
        {output}
      </div>
    );
  }
}

export default Grid;
