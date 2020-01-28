import { createStore } from 'redux'
import { combineReducers } from 'redux'
import messagesReducer from './messages/messagesReducer'

const store = createStore(combineReducers({
  'MESSAGES': messagesReducer
}))

export default store
