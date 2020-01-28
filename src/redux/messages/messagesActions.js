export const SET_MESSAGES = 'SET_MESSAGES'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'
export const SET_FILTER_TYPE = 'SET_FILTER_TYPE'

export const setMessages = (messages) => {
  return {
    type: SET_MESSAGES,
    messages
  }
}

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message
  }
}

export const removeMessage = (id) => {
  return {
    type: REMOVE_MESSAGE,
    id
  }
}

export const setFilterType = (filter) => {
  return {
    type: SET_FILTER_TYPE,
    filter
  }
}
