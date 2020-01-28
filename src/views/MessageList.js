import React, { Component } from 'react'
import Table from '../components/Table'
import Loading from '../components/Loading'
import { fetchMessages } from '../helpers/fakeRequest'

class MessageList extends Component {

  componentDidMount () {
    const { isLoaded } = this.props
    if (isLoaded) return

    // Simulate API request
    fetchMessages().then((data) => {
      const { setMessages } = this.props.actions
      setMessages(data)
    })
  }

  onFilterChange (e) {
    const { setFilterType } = this.props.actions
    setFilterType(e.target.value)
  }

  render () {
    const header = ['#', 'Message', 'Status']
    const { filteredMessages, isLoading, getFilterType } = this.props

    return (
    <div className={'container'}>
      <div className="row">
        <div className="col-12">
          <h1 className={'text-center'}>Liste des messages</h1>
          <select onChange={e => this.onFilterChange(e)} value={getFilterType}>
            <option value={'SHOW_ALL'}>Tous</option>
            <option value={'SHOW_PUBLIC'}>Public</option>
            <option value={'SHOW_PRIVATE'}>Privé</option>
          </select>
          {isLoading ? <Loading /> : <Table header={header} data={filteredMessages} />}
        </div>
      </div>
    </div>
    )
  }
}

export default MessageList
