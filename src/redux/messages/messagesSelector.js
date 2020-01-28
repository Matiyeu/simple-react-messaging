import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_PRIVATE, SHOW_PUBLIC } from './messagesFilter'

export const getFilterType = (state) => state.MESSAGES.filterType
const getMessages = (state) => state.MESSAGES.messages

export const getVisibleMessages = createSelector(
[getFilterType, getMessages],
(filterType, messages) => {
  switch (filterType) {
    case SHOW_ALL:
      return messages
    case SHOW_PRIVATE:
      return messages.filter(m => m.status === 'private')
    case SHOW_PUBLIC:
      return messages.filter(m => m.status === 'public')
    default:
      new Error(`No filter ${filterType}`)
      return messages
  }
})

export const isLoading = (state) => {
  return state.MESSAGES.isLoading
}

export const isLoaded = (state) => {
  return state.MESSAGES.isLoaded
}
