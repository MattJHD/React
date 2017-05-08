import React, {Component} from 'react';
import Header from '../views/header.js';
import Footer from '../views/footer.js';
import RessourcesTD from '../components/ressources-td.js';
import ToDo from '../components/toDo.js';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="grid_page" className="grid-page">
          <h1 className="title">Home</h1>
          <RessourcesTD/>
          <ToDo/>
        </div>
        <Footer/>
      </div>
    );
  }
};
