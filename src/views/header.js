import React, {Component} from 'react';
import MainNav from '../components/main-nav.js';
import {Link} from 'react-router-dom';

export default class pageHeader extends Component {
  render() {
    return (
      <header id="grid_header" className="row grid-header">
        <Link to="/">
          <img src={require("../assets/img/logo.png")} alt="logo" className="logo" />
        </Link>
        <MainNav/>
      </header>
    );
  }
}
