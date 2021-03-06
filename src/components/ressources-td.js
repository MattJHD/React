import React, {Component} from 'react';

export default class RessourcesTD extends Component {
  render() {
    return (
      <div id="ressources_td">
        <h3 className="title">Ressources du package</h3>
        <ul className="list">
          <li>
            <a target="_blank" href="https://webpack.js.org/guides/">webpack guides</a>
          </li>
          <li>
            <a target="_blank" href="https://webpack.js.org/concepts/">webpack concepts</a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/webpack-contrib/file-loader">file loader plugin</a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/tcoopman/image-webpack-loader">image-webpack-loader</a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/reacttraining/react-router">react-router-dom</a>
          </li>
          <li>
            <a target="_blank" href="https://babeljs.io/">babel</a>
          </li>
          <li>
            <a target="_blank" href="http://ejs.co/">EJS</a>
          </li>
        </ul>
        <h3 className="title">Outils</h3>
        <ul className="list">
          <li>
            <a target="_blank" href="https://www.mockaroo.com/">Mockaroo : créer sets de données de tests</a>
          </li>
        </ul>
        <h3 className="title">Tutos</h3>
        <ul className="list">
          <li>
            <a target="_blank" href="http://www.jumoel.com/2017/zero-to-webpack.html">Zero to webpack</a>
          </li>
          <li>
            <a target="_blank" href="http://blog.revathskumar.com/2015/08/reactjs-things-i-learned-after-building-first-app.html">infos utiles avec REACT</a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/facebookincubator/create-react-app">create react app</a>
          </li>
        </ul>
      </div>
    );
  }
}
