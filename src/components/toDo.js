import React, {Component} from 'react';

export default class toDo extends Component {
  render() {
    return (
    	<div>
    	<h3 className="title">To Do</h3>
	      <ul className="list">
	      	<li>modifier la view contact (html/css)</li>
	      	<li>configurer node pour envoyer des mails</li>
	      	<li>connecter un serveur mysql</li>
	      	<li>afficher un jeu de données sur la vue blog</li>
	      	<li>tips: tester mockaroo.com pour vos tests</li>
	      	<li>Poster sur un repo github avant le 08/05:
- prévenir de la mise en ligne du repository : guillaume.amangoua@gmail.com</li>
	      </ul>
      	</div>
    );
  }
}
