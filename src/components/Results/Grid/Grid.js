import React, { Component } from 'react';
import Cell from '../Cell/Cell'
import Modal from '../Modal/Modal'
import phases from '../../../config/phases'
import cellGenerator from '../../../helpers/cellGenerator'
import './Grid.css';

class Grid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: props.questions,
      selectedCellData: null,
      showModal: false
    }

    this.handleSelectedCell = this.handleSelectedCell.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleSelectedCell(selectedCellData) {
    this.setState({selectedCellData, showModal: true})
  }

  handleCloseModal() {
    this.setState({selectedCellData: null, showModal: false})
  }

  render() {
    const cells = cellGenerator.generateCellsFromPhases(phases, this.props.questions)
    const emptyCellData = cellGenerator.createCell()
    const output = []

    // Create the grid header along the x axis
    for (let n = 0; n < cells.length +1; n++) {
      output.push(
        <Cell key={`${n-1},-1`} x={n-1} y='-1' data={emptyCellData} settings={this.props.settings}>
          <span>{n === 0 ? '+' : n -1}</span>
        </Cell>
      )
    }

    for (let y = 0; y < cells.length; y++) {
      // Create the grid header along the y axis
      output.push(
        <Cell key={`-1,${y}`} x='-1' y={y-1} data={emptyCellData} settings={this.props.settings}>
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
            settings={this.props.settings}
            handleSelectedCell={this.handleSelectedCell}
          >
            <span>{`${y} + ${x}`}</span>
          </Cell>
        )
      }
    }

    return (
      <div className="Grid">
        {output}
        {this.state.showModal && this.state.selectedCellData ? 
          <Modal selectedCellData={this.state.selectedCellData} handleCloseModal={this.handleCloseModal}/> 
        : false}
      </div>
    );
  }
}

export default Grid;
