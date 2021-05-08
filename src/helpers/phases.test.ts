import phases from './phases'

describe('getPhasesFromIds', () => {
  describe('when the input parameter is not an array', () => {
    it('should throw an error if the input parameter is not provided', () => {
      expect(() => { phases.getPhasesFromIds() }).toThrow()
    })
  
    it('should throw an error if the input parameter is not an array', () => {
      expect(() => { phases.getPhasesFromIds('foobar') }).toThrow()
      expect(() => { phases.getPhasesFromIds(1) }).toThrow()
      expect(() => { phases.getPhasesFromIds({}) }).toThrow()
    })
  })

  describe('when the input parameter is an array', () => {
    it('should return an empty array if given an empty array', () => {
      expect(phases.getPhasesFromIds([])).toEqual([])
    })

    it('should return the phase that has the given phase ID', () => {
      const output = [{
        id: 9,
        name: 'Other',
        description: 'Other Number Bonds (Plus 3)',
        number: 10,
        colour: '#ffffff',
        bonds: [
            {
                x: 5,
                y: 3
            },
            {
                x: 6,
                y: 3
            }
        ]
      }]
      expect(phases.getPhasesFromIds([9])).toEqual(output)
      expect(phases.getPhasesFromIds(['9'])).toEqual(output)
    })
  })
})

describe('transformPhases', () => {
  describe('when the input parameter is not an array', () => {
    it('should throw an error if the input parameter is not provided', () => {
      expect(() => { phases.transformPhases() }).toThrow()
    })
  
    it('should throw an error if the input parameter is not an array', () => {
      expect(() => { phases.transformPhases('foobar') }).toThrow()
      expect(() => { phases.transformPhases(1) }).toThrow()
      expect(() => { phases.transformPhases({}) }).toThrow()
    })
  })

  describe('when the input parameter is an array', () => {
    it('should return an empty array if given an empty array', () => {
      expect(phases.getPhasesFromIds([])).toEqual([])
    })

    it('should transform and return the phases that were given', () => {
      const input = [{
        bonds: [
            {
                x: 5,
                y: 3
            },
            {
                x: 6,
                y: 3
            }
        ]
      }]
      const output = [{
        bonds: [
            {
                x: 5,
                y: 3
            },
            {
                x: 6,
                y: 3
            },
            {
              x: 3,
              y: 5
            },
            {
                x: 3,
                y: 6
            }
        ]
      }]
      expect(phases.transformPhases(input)).toEqual(output)
    })

    it('should not duplicate number bonds where the first and second number are the same', () => {
      const input = [{
        bonds: [
            {
                x: 5,
                y: 5
            },
            {
                x: 4,
                y: 3
            }
        ]
      }]
      const output = [{
        bonds: [
            {
                x: 5,
                y: 5
            },
            {
                x: 4,
                y: 3
            },
            {
              x: 3,
              y: 4
            }
        ]
      }]
      expect(phases.transformPhases(input)).toEqual(output)
    })
  })
})

describe('createQuestionsFromPhases', () => {
  describe('when the input parameter is not an array', () => {
    it('should throw an error if the input parameter is not provided', () => {
      expect(() => { phases.createQuestionsFromPhases() }).toThrow()
    })
  
    it('should throw an error if the input parameter is not an array', () => {
      expect(() => { phases.createQuestionsFromPhases('foobar') }).toThrow()
      expect(() => { phases.createQuestionsFromPhases(1) }).toThrow()
      expect(() => { phases.createQuestionsFromPhases({}) }).toThrow()
    })
  })

  describe('when the input parameter is an array', () => {
    it('should return an empty array if given an empty array', () => {
      expect(phases.createQuestionsFromPhases([])).toEqual([])
    })

    it('should throw an error when each element of the input does not contain an array of bonds', () => {
      expect(() => { phases.createQuestionsFromPhases([{}]) }).toThrow()
    })

    it('should throw an error when each element of the input does not contain an array of bonds', () => {
      const input = [{
        id: 1,
        name: 'Phase 1',
        description: 'Some description',
        number: 1,
        colour: 'orange',
        bonds: [
          { x: 1, y: 2 },
          { x: 2, y: 1 }
        ]
      }]
      const output = [
        {
          x: 1,
          y: 2,
          answeredCorrectly: null,
          answerGiven: null,
          timeToAnswer: null,
          phase: {
            id: 1,
            name: 'Phase 1',
            description: 'Some description',
            number: 1,
            colour: 'orange'
          }
        },
        {
          x: 2,
          y: 1,
          answeredCorrectly: null,
          answerGiven: null,
          timeToAnswer: null,
          phase: {
            id: 1,
            name: 'Phase 1',
            description: 'Some description',
            number: 1,
            colour: 'orange'
          }
        },
      ]
      expect(phases.createQuestionsFromPhases(input)).toEqual(output)
    })
  })
})

describe('shuffleArray', () => {
  describe('when the input parameter is not an array', () => {
    it('should throw an error if the input parameter is not provided', () => {
      expect(() => { phases.shuffleArray() }).toThrow()
    })
  
    it('should throw an error if the input parameter is not an array', () => {
      expect(() => { phases.shuffleArray('foobar') }).toThrow()
      expect(() => { phases.shuffleArray(1) }).toThrow()
      expect(() => { phases.shuffleArray({}) }).toThrow()
    })
  })

  describe('when the input parameter is an array', () => {
    const input = [ 'foo', 'bar', 'baz' ]

    it('should return an empty array if supplied an empty array', () => {
      expect(phases.shuffleArray([])).toEqual([])
    })

    it('should still contain all elements of the input array', () => {
      expect(phases.shuffleArray(input)).toContain('foo')
      expect(phases.shuffleArray(input)).toContain('bar')
      expect(phases.shuffleArray(input)).toContain('baz')
    })

    it('should still contain the same number of elements of the input array', () => {
      expect(phases.shuffleArray(input).length).toEqual(3)
    })
  })
})