let presentationHelper: any = {}

/**
 * A helper function designed to return a text colour based on the given background colour.
 * Function adapted from https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
 * @param bgColor The background colour that you would like to know the most suitable overlaying text colour for.
 * @returns A string - either 'light-color' or 'dark-color'.
 */
presentationHelper.pickTextColorBasedOnBgColor = (bgColor: any) => {
  if (!bgColor || typeof bgColor !== 'string' || bgColor.charAt(0) !== '#') {
    console.warn(`Unable to pick a text colour based on the given background colour: '${bgColor}'. Please provide a new colour in the correct HEX format (e.g. '#0000FF' instead of 'blue').`)
    return 'dark-color'
  }

  var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  var uicolors = [r / 255, g / 255, b / 255];
  var c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
  return (L < 0.179) ? 'light-color' : 'dark-color';
}

export default presentationHelper