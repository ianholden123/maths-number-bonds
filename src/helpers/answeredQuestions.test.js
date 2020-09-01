import answeredQuestions from './answeredQuestions'

describe('getAllIncorrectAnswers', () => {
  describe('when the input parameters are invalid', () => {
    it('should throw, if there are no input parameters', () => {
      expect(() => answeredQuestions.getAllIncorrectAnswers()).toThrow()
    })

    it('should throw, if the input parameter is not an array.', () => {
      expect(() => answeredQuestions.getAllIncorrectAnswers({})).toThrow()
      expect(() => answeredQuestions.getAllIncorrectAnswers('')).toThrow()
      expect(() => answeredQuestions.getAllIncorrectAnswers(null)).toThrow()
      expect(() => answeredQuestions.getAllIncorrectAnswers(1)).toThrow()
    })
  })

  describe('when the input parameter is an array with invalid elements', () => {
    it('should filter the incorrect elements out', () => {
      expect(answeredQuestions.getAllIncorrectAnswers([1,2,3])).toEqual([])
      expect(answeredQuestions.getAllIncorrectAnswers(['1','2','3'])).toEqual([])
      expect(answeredQuestions.getAllIncorrectAnswers([{}, {}, {}])).toEqual([])
    })
  })


  describe('when the input parameters are valid', () => {
    it('should return an empty array, if the input parameter is also an empty array.', () => {
      expect(answeredQuestions.getAllIncorrectAnswers([])).toEqual([])
    })

    it('should return only the incorrect answers.', () => {
      const input = [
        {
          answeredCorrectly: true,
          phase: { id: 7 },
          x: 9,
          y: 8
        },
        {
          answeredCorrectly: false,
          phase: { id: 5 },
          x: 7,
          y: 10
        }
      ]
      const expectedOutput = [
        {
          answeredCorrectly: false,
          phase: { id: 5 },
          x: 7,
          y: 10
        }
      ]
      expect(answeredQuestions.getAllIncorrectAnswers(input)).toEqual(expectedOutput)
    })

    it('should return only the incorrect answers and remove null values.', () => {
      const input = [
        {
          answeredCorrectly: true,
          phase: { id: 7 },
          x: 9,
          y: 8
        },
        {
          answeredCorrectly: false,
          phase: { id: 5 },
          x: 7,
          y: 10
        },
        {
          answeredCorrectly: null,
          phase: { id: 5 },
          x: 8,
          y: 10
        }
      ]
      const expectedOutput = [
        {
          answeredCorrectly: false,
          phase: { id: 5 },
          x: 7,
          y: 10
        }
      ]
      expect(answeredQuestions.getAllIncorrectAnswers(input)).toEqual(expectedOutput)
    })
  })
})

describe('groupAnswersByPhase', () => {
  describe('when the input parameters are invalid', () => {
    it('should throw, if there are no input parameters', () => {
      expect(() => answeredQuestions.groupAnswersByPhase()).toThrow()
    })

    it('should throw, if the input parameter is not an array.', () => {
      expect(() => answeredQuestions.groupAnswersByPhase({})).toThrow()
      expect(() => answeredQuestions.groupAnswersByPhase('')).toThrow()
      expect(() => answeredQuestions.groupAnswersByPhase(null)).toThrow()
      expect(() => answeredQuestions.groupAnswersByPhase(1)).toThrow()
    })
  })

  describe('when the input parameter is an array with invalid elements', () => {
    it('should filter the incorrect elements out', () => {
      expect(answeredQuestions.groupAnswersByPhase([1,2,3])).toEqual([])
      expect(answeredQuestions.groupAnswersByPhase(['1','2','3'])).toEqual([])
      expect(answeredQuestions.groupAnswersByPhase([{}, {}, {}])).toEqual([])
    })
  })

  describe('when the input parameters are valid', () => {
    it('should return an empty array, if the input parameter is also an empty array.', () => {
      expect(answeredQuestions.groupAnswersByPhase([])).toEqual([])
    })

    it('should return the questions grouped by their phase.', () => {
      const input = [
        {
          answeredCorrectly: true,
          phase: { id: 7 },
          x: 9,
          y: 8
        },
        {
          answeredCorrectly: false,
          phase: { id: 5 },
          x: 7,
          y: 10
        }
      ]
      const expectedOutput = [
        {
          id: 5,
          bonds: [
            {
              answeredCorrectly: false,
              x: 7,
              y: 10
            }
          ]
        },
        {
          id: 7,
          bonds: [
            {
              answeredCorrectly: true,
              x: 9,
              y: 8
            }
          ]
        },

      ]
      expect(answeredQuestions.groupAnswersByPhase(input)).toEqual(expectedOutput)
    })

    it('should return the questions grouped by their phase.', () => {
      const input = [
        {
          answeredCorrectly: false,
          phase: { id: 0 },
          x: 2,
          y: 4
        },
        {
          answeredCorrectly: true,
          phase: { id: 7 },
          x: 9,
          y: 8
        },
        {
          answeredCorrectly: true,
          phase: { id: 7 },
          x: 8,
          y: 9
        },
        {
          answeredCorrectly: false,
          phase: { id: 5 },
          x: 7,
          y: 10
        }
      ]
      const expectedOutput = [
        {
          id: 0,
          bonds: [
            {
              answeredCorrectly: false,
              x: 2,
              y: 4
            }
          ]
        },
        {
          id: 5,
          bonds: [
            {
              answeredCorrectly: false,
              x: 7,
              y: 10
            }
          ]
        },
        {
          id: 7,
          bonds: [
            {
              answeredCorrectly: true,
              x: 9,
              y: 8
            },
            {
              answeredCorrectly: true,
              x: 8,
              y: 9
            }
          ]
        }
      ]
      expect(answeredQuestions.groupAnswersByPhase(input)).toEqual(expectedOutput)
    })
  })
})

describe('sortAnswersByPhase', () => {
  describe('when the input parameters are invalid', () => {
    it('should throw, if there are no input parameters', () => {
      expect(() => answeredQuestions.sortAnswersByPhase()).toThrow()
    })

    it('should throw, if the input parameter is not an array.', () => {
      expect(() => answeredQuestions.sortAnswersByPhase({})).toThrow()
      expect(() => answeredQuestions.sortAnswersByPhase('')).toThrow()
      expect(() => answeredQuestions.sortAnswersByPhase(null)).toThrow()
      expect(() => answeredQuestions.sortAnswersByPhase(1)).toThrow()
    })
  })

  describe('when the input parameter is an array with invalid elements', () => {
    it('should filter the incorrect elements out', () => {
      expect(answeredQuestions.sortAnswersByPhase([1,2,3])).toEqual([])
      expect(answeredQuestions.sortAnswersByPhase(['1','2','3'])).toEqual([])
      expect(answeredQuestions.sortAnswersByPhase([{}, {}, {}])).toEqual([])
    })
  })

  describe('when the input parameters are valid', () => {
    it('should sort two phases correctly (by phase ID)', () => {
      const input = [
        {
          id: 0,
          bonds: [{}, {}]
        },
        {
          id: 2,
          bonds: [{}, {}, {}]
        },
        {
          id: 1,
          bonds: [{}]
        }
      ]
      const expectedOutput = [
        {
          id: 0,
          bonds: [{}, {}]
        },
        {
          id: 1,
          bonds: [{}]
        },
        {
          id: 2,
          bonds: [{}, {}, {}]
        }
      ]
      expect(answeredQuestions.sortAnswersByPhase(input)).toEqual(expectedOutput)
    })
  })
})