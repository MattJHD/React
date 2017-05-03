/*jshint esversion: 6 */

// import path from 'path';
import { Server } from 'http';
// var http = require("http");
// import Express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { match, RouterContext } from 'react-router';
// import routes from './routes';
// import NotFoundPage from './components/NotFoundPage';

var server = Server.createServer(function (req, res) {
    log(req);
});

// initialize the server and configure support for ejs templates
// const app = new Express();
// const server = new Server(app);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
// app.use(Express.static(path.join(__dirname, 'static')));

// universal routing and rendering
// app.get('*', (req, res) => {
//     console.log(req);
//     console.log(res);
// });

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server yy running on http://localhost:${port} [${env}]`);
});
