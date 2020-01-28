import { SET_MESSAGES, ADD_MESSAGE, REMOVE_MESSAGE, SET_FILTER_TYPE } from './messagesActions'
import { SHOW_ALL } from './messagesFilter'
import update from 'immutability-helper'

const initialState = {
  messages: [],
  filterType: SHOW_ALL,
  isLoading: true,
  isLoaded: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const { message } = action
      return update(state, {
        messages: { $set: [...state.messages, message] }
      })
    }

    case REMOVE_MESSAGE: {
      const { id } = action
      return update(state, {
        messages: { $set: state.messages.filter(m => m.id !== id) }
      })
    }

    case SET_FILTER_TYPE: {
      const { filter } = action
      return update(state, {
        filterType: { $set: filter }
      })
    }

    case SET_MESSAGES: {
      const { messages } = action
      return update(state, {
        messages: { $set: messages },
        isLoading: { $set: false },
        isLoaded: { $set: true }
      })
    }

    default:
      return state
  }
}
