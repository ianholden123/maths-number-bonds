export interface ConfigVariableTypes {
  quickAnswerTime: number
}

// When an answer to a question has been given in less than this time (in
// milliseconds), we deem this answer to be a 'quick answer'
export const quickAnswerTime: ConfigVariableTypes['quickAnswerTime'] = 5000
