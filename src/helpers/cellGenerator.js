let cellGenerator = {}

cellGenerator.generateCellsFromPhases = (phases) => {
    if (!phases || typeof phases !== 'object' || phases.length === 0) return null

    let cells = []
    const yAxisValue = cellGenerator.getAxisRange(phases, 'y')

    for (let i = 0; i <= yAxisValue.maxAxisValue; i++) {
      cells.push([])
    }

    phases.forEach(phase => {
      if (!phase.bonds || typeof phase.bonds !== 'object' || phase.bonds.length === 0) return null

      // Here we can populate each phase array with the relevant number bond information
      phase.bonds.forEach(bond => {
        if (!bond || !bond.hasOwnProperty('x') || !bond.hasOwnProperty('y')) return null

        cells[bond.y][bond.x] = cellGenerator._createCell(bond.x, bond.y, phase)
        cells[bond.x][bond.y] = cellGenerator._createCell(bond.y, bond.x, phase)
      })
    })

    return cells
}

/**
 * Finds the largest and smallest values in a phases object so that we know what our axis value range
 * should look like.
 * @param phases - A phases object.
 * @param axis - A string containing 'x' or 'y'.
 */
cellGenerator.getAxisRange = (phases, axis) => {
  if (!phases || typeof phases !== 'object' || phases.length === 0) return null
  if (axis !== 'x' && axis !== 'y') return null

  let minAxisValue = Number.MAX_SAFE_INTEGER
  let maxAxisValue = 0
  phases.forEach((phase) => {
    if (!phase.bonds || typeof phase.bonds !== 'object' || phase.bonds.length === 0) return null
    
    phase.bonds.forEach(bond => {
      if (!bond || !('x' in bond) || !('y' in bond)) return null
      if (bond[axis] < minAxisValue) minAxisValue = bond[axis]
      if (bond[axis] > maxAxisValue) maxAxisValue = bond[axis]
    })
  })

  return { minAxisValue, maxAxisValue }
}

/**
 * Returns the object that should populate a cell component
 */
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