import phases from '../config/phases';

let phasesHelper: any = {};

/**
 * Return a list of phases from the given array of phase IDs.
 * @param chosenPhaseIds An array of IDs.
 * @returns An array of phases.
 */
phasesHelper.getPhasesFromIds = (chosenPhaseIds: any) => {
  if (!chosenPhaseIds || !Array.isArray(chosenPhaseIds))
    throw new Error("Sorry, we could not work out which phases you would like to use");

  return chosenPhaseIds.map(chosenPhaseId => {
    return phases.find((phase: any) => {
      return Number(chosenPhaseId) === phase.id;
    });
  });
};

/**
 * Transform phases to reveal the complete set of bonds for that phase.
 * @param chosenPhases An array of phase objects.
 * @return An array of phase objects.
 */
phasesHelper.transformPhases = (chosenPhases: any) => {
  if (!chosenPhases || !Array.isArray(chosenPhases))
    throw new Error("Sorry, we couldn't work out which phases you would like to see");

  // Clone our parameter object so that we do not change the object referenced in the parameter.
  let chosenPhasesClone = JSON.parse(JSON.stringify(chosenPhases))

  return chosenPhasesClone.map((chosenPhase: any) => {
    chosenPhase.bonds.forEach((bond: any) => {
      if (bond.y === bond.x) return
      chosenPhase.bonds.push({ x: bond.y, y: bond.x });
    });
    return chosenPhase;
  });
};

/**
 * Create a complete set of questions from the chosen phases.
 * @param transformedPhases An array of phases that have been transformed.
 * @returns An array of question objects, enriched with phase information.
 */
phasesHelper.createQuestionsFromPhases = (transformedPhases: any) => {
  if (!transformedPhases || !Array.isArray(transformedPhases))
    throw new Error('Sorry, there was an error retrieving your questions');
  
  let questions: any = [];
  transformedPhases.forEach(transformedPhase => {
    if (!transformedPhase.bonds || !Array.isArray(transformedPhase.bonds))
      throw new Error('Sorry, we could not find the bonds in this phase');

    transformedPhase.bonds.forEach((bond: any) => {
      questions.push({
        ...bond,
        answeredCorrectly: null,
        answerGiven: null,
        timeToAnswer: null,
        phase: {
          id: transformedPhase.id,
          name: transformedPhase.name,
          description: transformedPhase.description,
          number: transformedPhase.number,
          colour: transformedPhase.colour
        }
      });
    });
  });
  return questions;
};

/**
 * Takes an array input and randomly shuffles the elements.
 * Function found here: https://javascript.info/task/shuffle
 * @param array An array.
 * @returns An array with the elements in a different order than the input array. 
 */
phasesHelper.shuffleArray = (array: any) => {
  if (!array || !Array.isArray(array))
    throw new Error('Sorry, there was an error shuffling your array');

  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements array[i] and array[j]
  }
  return array
};

export default phasesHelper;
