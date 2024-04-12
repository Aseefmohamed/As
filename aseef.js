var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mrinteltv2020@gmail.com',
    pass: 'Aseef@04'
  }
});

var mailOptions = {
  from: 'mrinteltv2020@gmail.com',
  to: 'mohamaseef@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
