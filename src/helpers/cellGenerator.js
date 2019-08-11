let cellGenerator = {}

cellGenerator.generateCellsFromPhases = (phases) => {
    if (!phases || typeof phases !== 'object' || phases.length === 0) return null

    let cells = [[],[]]

    phases.forEach(() => {
      // To start a new phase, we should initialise an empty array that we can populate
      cells.push([])
    })

    phases.forEach(phase => {
      if (!phase.bonds || typeof phase.bonds !== 'object' || phase.bonds.length === 0) return null

      // Here we can populate each phase array with the relevant number bond information
      phase.bonds.forEach(bond => {
        if (!bond || !bond.x || !bond.y) return null

        cells[bond.y -1][bond.x -1] = cellGenerator._createCell(bond.x, bond.y, phase)
        cells[bond.x -1][bond.y -1] = cellGenerator._createCell(bond.y, bond.x, phase)
      })
    })

    return cells
}

cellGenerator._createCell = (value1, value2, phase) => {
  return {
    x : value1,
    y : value2,
    phase: {
      id: phase.id || null,
      name: phase.name || '',
      description: phase.description || '',
      number: phase.number || 0,
      colour: phase.colour || 'white'
    }
  }
}

export default cellGenerator