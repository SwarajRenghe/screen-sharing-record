var express = require ('express');
var nodemailer = require ('nodemailer')
var xoauth2 = require('xoauth2');
var smtp = require('nodemailer-smtp-transport');

var app = express ();

app.get ('/', function (req, res){
	res.sendFile ("homepage.html", { root: './public' })
})

app.get ('/about', function (req, res){
	res.send (req.params)
})

app.get ('/email', function (req, res){
	// res.sendFile(__dirname + "/public/" + "emailForm.html");
	res.sendFile ("emailForm.html", { root: './public' })
})

app.get ('/response', function (req, res){
	console.log(req.query.emailID)

	var transporter = nodemailer.createTransport({
	 service: 'gmail',
	 auth: {
	        user: 'ssadscreensharing@gmail.com',
	        pass: '123ABCxyz'
	    }
	});

	const mailOptions = {
	  from: 'ssadscreensharing@gmail.com', // sender address
	  to: req.query.emailID,
	  // to: 'wowukajoz@1shivom.com', // list of receivers
	  subject: 'Testing NodeMailer', // Subject line
	  text: 'SSAD Screen sharing link : ' + req.query.emailID// plain text body
	};

	transporter.sendMail(mailOptions, function (err, info) {
	   if(err)
	     console.log(err)
	   else
	     console.log(info);
	});

	res.send ("message sent succesfully!")
})


app.listen (3000, function () {
	console.log ("listening on localhost port 3000...")
})