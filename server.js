/*jshint esversion: 6 */

import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import mysql from 'mysql';

var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'blog'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
var port = process.env.PORT || 80;
var env = process.env.NODE_ENV || 'production';

// =============================================================================
var router = express.Router();              


app.get('/articles',function (req,res) {

	connection.query('SELECT * FROM articles', function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		res.json(results);
	});
})


app.post('/sendMail', function(req, res, next) {
	var mailOptions = req.body;
	console.log(mailOptions);
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: '',
			pass: ''
		}
	});
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
			res.json({code:500,data:error});

		}
		console.log('Message %s sent: %s', info.messageId, info.response);
		res.json({code:200,data:info});
	});

});

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server yy running on http://localhost:${port} [${env}]`);
});
