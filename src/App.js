import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import MessageListContainer from './views/MessageList.Container'
import MessageAddContainer from './views/MessageAdd.Container'
import { ROUTE_MESSAGE_ADD, ROUTE_MESSAGE_LIST } from './constants/routes'

class App extends Component {
  render () {
    return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path={ROUTE_MESSAGE_ADD}>
              <MessageAddContainer />
            </Route>
            <Route path={ROUTE_MESSAGE_LIST}>
              <MessageListContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
    )
  }
}

export default App
