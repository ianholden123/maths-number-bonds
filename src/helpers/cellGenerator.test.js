import cellGenerator from './cellGenerator'

describe('generateCellsFromPhases', () => {
  describe('when the input parameters are invalid', () => {
    it('should return null when we do not supply any parameters', () => {
      expect(cellGenerator.generateCellsFromPhases()).toEqual(null)
    })
    it('should return null when we supply invalid "phases" parameter', () => {
      expect(cellGenerator.generateCellsFromPhases(null, null)).toEqual(null)
      expect(cellGenerator.generateCellsFromPhases(1, null)).toEqual(null)
      expect(cellGenerator.generateCellsFromPhases('foobar', null)).toEqual(null)
      expect(cellGenerator.generateCellsFromPhases({}, null)).toEqual(null)
      expect(cellGenerator.generateCellsFromPhases([], null)).toEqual(null)
    })
  })
})

describe('getAxisRange', () => {
  describe('when the input parameters are invalid', () => {
    it('should return null when we do not supply any parameters', () => {
      expect(cellGenerator.getAxisRange()).toEqual(null)
    })

    it('should return null when we supply invalid "phases" parameter', () => {
      expect(cellGenerator.getAxisRange(null, null)).toEqual(null)
      expect(cellGenerator.getAxisRange(1, null)).toEqual(null)
      expect(cellGenerator.getAxisRange('foobar', null)).toEqual(null)
      expect(cellGenerator.getAxisRange({}, null)).toEqual(null)
      expect(cellGenerator.getAxisRange([], null)).toEqual(null)
    })

    it('should return null when we do not supply "axis" parameter', () => {
      expect(cellGenerator.getAxisRange([{ foo: 'bar' }])).toEqual(null)
    })

    it('should return null when we supply invalid "axis" parameter', () => {
      expect(cellGenerator.getAxisRange([{ foo: 'bar' }], null)).toEqual(null)
      expect(cellGenerator.getAxisRange([{ foo: 'bar' }], 1)).toEqual(null)
      expect(cellGenerator.getAxisRange([{ foo: 'bar' }], 'foobar')).toEqual(null)
      expect(cellGenerator.getAxisRange([{ foo: 'bar' }], {})).toEqual(null)
      expect(cellGenerator.getAxisRange([{ foo: 'bar' }], [])).toEqual(null)
    })
  })
})