var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bonvoyageproject1@gmail.com',
    pass: 'pqkzlomjrapmrlnn'/*BonVoyage@123*/
  }
});

var mailOptions = {
  from: 'bonvoyageproject1@gmail.com',
  to: 'gspriyankasarala@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Abinaya oru lusu'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});