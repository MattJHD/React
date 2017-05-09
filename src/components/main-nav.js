import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class Menu extends Component {
  render() {
    return (
      <nav id="grid_nav" className="nav main">
        <ul className="list">
          <li className="item">
            <NavLink exact={true} to="/" className="link">home</NavLink>
          </li>
          <li className="item">
            <NavLink to="/blog" className="link">blog</NavLink>
          </li>
          <li className="item">
            <NavLink to="/contact" className="link">contact</NavLink>
          </li>
          <li className="item">
            <NavLink to="/dashboard" className="link">dashboard</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
