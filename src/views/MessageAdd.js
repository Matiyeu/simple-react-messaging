import React, { Component } from 'react'
import { getRandomInt } from '../helpers/random'
import { Redirect } from 'react-router-dom'
import { ROUTE_MESSAGE_LIST } from '../constants/routes'
import Loading from '../components/Loading'
import { fetchMessages } from '../helpers/fakeRequest'

class MessageAdd extends Component {
  constructor (props) {
    super(props)
    this.state = { msg: '', status: 'private' }
  }

  handleChange (key, e) {
    this.setState({ [key]: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { addMessage } = this.props.actions
    const { msg, status } = this.state
    const message = { id: getRandomInt(9999), msg, status }
    this.setState({ isLoading: true })

    // Simulate API request
    setTimeout(() => {
      addMessage(message)
      this.setState({ redirect: true })
    }, 1000)
  }

  componentDidMount () {
    const { messagesIsLoaded } = this.props
    if (messagesIsLoaded) return

    // Simulate API request
    fetchMessages().then((data) => {
      const { setMessages } = this.props.actions
      setMessages(data)
    })
  }

  render () {
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to={ROUTE_MESSAGE_LIST} />
    }

    const { msg, status, isLoading } = this.state

    return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className={'text-center'}>Ajouter un message</h1>
          {isLoading && <Loading />}
          {!isLoading && <form onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Message</label>
              <div className="col-sm-10">
                <textarea className="form-control" onChange={e => this.handleChange('msg', e)} value={msg} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Status</label>
              <div className="col-sm-10">
                <select className="form-control" onChange={e => this.handleChange('status', e)}
                        value={status}>
                  <option value='private'>Privé</option>
                  <option value='public'>Public</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="offset-2 col-sm-10">
                <button type={'submit'} className={'btn btn-primary'}>Valider</button>
              </div>
            </div>
          </form>}
        </div>
      </div>
    </div>

    )
  }
}

export default MessageAdd
