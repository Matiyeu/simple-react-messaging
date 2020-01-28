import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom'
import { ROUTE_MESSAGE_ADD, ROUTE_MESSAGE_LIST } from '../constants/routes'

class Navbar extends Component {

  render () {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">KICKLOX</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to={ROUTE_MESSAGE_ADD} className="nav-link" activeClassName="active">Ajouter un message</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={ROUTE_MESSAGE_LIST} className="nav-link" activeClassName="active">Messages</NavLink>
          </li>
        </ul>
      </div>
    </nav>)
  }
}

export default Navbar

