import { connect } from 'react-redux'
import MessageAdd from './MessageAdd'
import * as MessagesActions from '../redux/messages/messagesActions'
import { bindActionCreators } from 'redux'
import { getFilterType, isLoaded } from '../redux/messages/messagesSelector'

const mapStateToProps = (state) => {
  return {
    messagesIsLoaded: isLoaded(state),
    getFilterType: getFilterType(state)
  }
}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(MessagesActions, dispatch)
})

const MessageAddContainer = connect(
mapStateToProps,
mapDispatchToProps
)(MessageAdd)

export default MessageAddContainer
