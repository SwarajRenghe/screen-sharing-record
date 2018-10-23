var express = require ('express');
var nodemailer = require ('nodemailer')
var smtp = require('nodemailer-smtp-transport');

var app = express ();

app.get ('/', function (req, res){
	res.sendFile ("homepage.html", { root: './public' })
})



app.get ('/screensharing', function (req, res){
	res.sendFile ("index.html", { root: '.' })
})


app.get ('/response', function (req, res){
	console.log(req.query.url)
	var transporter = nodemailer.createTransport({
	 service: 'gmail',
	 auth: {
	        user: 'ssadscreensharing@gmail.com',
	        pass: '123ABCxyz'
	    }
	});

	const mailOptions = {
	  from: 'ssadscreensharing@gmail.com', // sender address
	  to: req.query.mail_to,
	  subject: 'Testing NodeMailer', // Subject line
	  text: 'SSAD Screen sharing link : ' + req.query.url// plain text body
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