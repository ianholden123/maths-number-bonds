import React, { useState } from 'react';
import Cell from '../Cell/Cell'
import Modal from '../Modal/Modal'
import phases from '../../../config/phases'
import cellGenerator from '../../../helpers/cellGenerator'
import './Grid.css';

const Grid = (props: any) => {
  const [selectedCellData, setSelectedCellData] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const cells = cellGenerator.generateCellsFromPhases(phases, props.questions)
  const emptyCellData = cellGenerator.createCell()
  const output: React.ReactNode[] = []

  // Create the grid header along the x axis
  for (let n = 0; n < cells.length +1; n++) {
    output.push(
      <Cell key={`${n-1},-1`} x={n-1} y='-1' data={emptyCellData} settings={props.settings}>
        <span>{n === 0 ? '+' : n -1}</span>
      </Cell>
    )
  }

  for (let y = 0; y < cells.length; y++) {
    // Create the grid header along the y axis
    output.push(
      <Cell key={`-1,${y}`} x='-1' y={y-1} data={emptyCellData} settings={props.settings}>
        <span>{y}</span>
      </Cell>
    )

    for (let x = 0; x < cells[y].length; x++) {
      output.push(
        <Cell
          key={`${x},${y}`}
          x={x}
          y={y}
          data={cells[x][y]}
          settings={props.settings}
          handleSelectedCell={(cellData: any) => { setSelectedCellData(cellData); setShowModal(true); }}
        >
          <span>{`${y} + ${x}`}</span>
        </Cell>
      )
    }
  }

  return (
    <div className="Grid">
      {output}
      {showModal && selectedCellData && 
        <Modal 
          selectedCellData={selectedCellData}
          handleCloseModal={() => { setSelectedCellData(null); setShowModal(false); }}
        /> 
      }
    </div>
  );
}

export default Grid;
