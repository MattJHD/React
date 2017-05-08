import React, {Component} from 'react';
import Header from '../views/header.js';
import Footer from '../views/footer.js';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="grid_page" className="grid-page">
          <h1 className="title">Dashboard</h1>
        </div>
        <Footer/>
      </div>
    );
  }
};
