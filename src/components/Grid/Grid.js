import React, { Component } from 'react';
import Cell from '../Cell/Cell'
import phases from '../../config/phases'
import cellGenerator from '../../helpers/cellGenerator'
import './Grid.css';

class Grid extends Component {

  render() {
    const output = []
    const cells = cellGenerator.generateCellsFromPhases(phases)
    console.log('THIS IS SOMETHING', cells)

    for (let y = 0; y < cells.length; y++) {
      for (let x = 0; x < cells[y].length + 2; x++) {
        console.log('THIS IS Y', y, 'THIS IS X', x)
        output.push(
          <Cell key={`${y - 1},${x - 1}`} x={x - 1} y={y - 1}>
            { x === 0 && y === 0 ? '+' : '' }
            { x === 0 && y !== 0 ? y - 1 : '' }
            { y === 0 && x !== 0 ? x - 1 : '' }
            { x > 0 && y > 0 ? `${y - 1} + ${x - 1}` : '' }
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
