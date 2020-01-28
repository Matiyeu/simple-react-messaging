import { connect } from 'react-redux'

import MessageList from './MessageList'
import * as MessagesActions from '../redux/messages/messagesActions'
import { getVisibleMessages, isLoaded, isLoading, getFilterType } from '../redux/messages/messagesSelector'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
    filteredMessages: getVisibleMessages(state),
    isLoading: isLoading(state),
    isLoaded: isLoaded(state),
    getFilterType: getFilterType(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(MessagesActions, dispatch)
})

const MessageListContainer = connect(
mapStateToProps,
mapDispatchToProps
)(MessageList)

export default MessageListContainer
