import React, { Component } from 'react';
import Cell from '../Cell/Cell'
import phases from '../../config/phases'
import cellGenerator from '../../helpers/cellGenerator'
import './Grid.css';

class Grid extends Component {

  render() {
    const cells = cellGenerator.generateCellsFromPhases(phases)
    const emptyCellData = cellGenerator.createCell()
    const output = []

    // Create the grid header along the x axis
    for (let n = 0; n < cells.length +1; n++) {
      output.push(
        <Cell key={`${n-1},-1`} x={n-1} y='-1' data={emptyCellData}>
          {n === 0 ? '+' : n -1}
        </Cell>
      )
    }

    for (let y = 0; y < cells.length; y++) {
      // Create the grid header along the y axis
      output.push(<Cell key={`-1,${y}`} x='-1' y={y-1} data={emptyCellData}>{y}</Cell>)

      for (let x = 0; x < cells[y].length; x++) {
        output.push(
          <Cell key={`${y},${x}`} x={x} y={y} data={cells[y][x]}>
            {`${y} + ${x}`}
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
