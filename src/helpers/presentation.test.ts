import presentationHelper from './presentation'

describe('pickTextColorBasedOnBgColor', () => {
  describe('when the input parameter is invalid', () => {
    it('should return a dark-color string if no parameter is given', () => {
      expect(presentationHelper.pickTextColorBasedOnBgColor()).toEqual('dark-color')
    })
    
    it('should return a dark-color string if an invalid input parameter is given', () => {
      expect(presentationHelper.pickTextColorBasedOnBgColor(1)).toEqual('dark-color')
      expect(presentationHelper.pickTextColorBasedOnBgColor(null)).toEqual('dark-color')
      expect(presentationHelper.pickTextColorBasedOnBgColor({})).toEqual('dark-color')
      expect(presentationHelper.pickTextColorBasedOnBgColor([])).toEqual('dark-color')
      expect(presentationHelper.pickTextColorBasedOnBgColor(true)).toEqual('dark-color')
    })

    it('should return a dark-color string if an invalid colour string is given', () => {
      expect(presentationHelper.pickTextColorBasedOnBgColor('red')).toEqual('dark-color')
    })
  })

  describe('when the input parameter is valid', () => {
    it('should return light-color for a black colour input', () => {
      expect(presentationHelper.pickTextColorBasedOnBgColor('#000000')).toEqual('light-color')
    })

    it('should return dark-color for a white colour input', () => {
      expect(presentationHelper.pickTextColorBasedOnBgColor('#FFFFFF')).toEqual('dark-color')
    })

    it('should return light-color for a dark blue colour input', () => {
      expect(presentationHelper.pickTextColorBasedOnBgColor('#00008B')).toEqual('light-color')
    })

    it('should return dark-color for a light blue colour input', () => {
      expect(presentationHelper.pickTextColorBasedOnBgColor('#ADD8E6')).toEqual('dark-color')
    })
  })
})