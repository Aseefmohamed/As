const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mohamaseef@gmail.com',
        pass: 'jqrv khay mtkh utdz'
    }
});

// Setup email data
let mailOptions = {
    from: 'mohamaseef@gmail.com',
    to: 'mrinteltv2020@gmail.com',
    subject: 'Alert! Your Friend Crossed the Border',
    text: 'Alert! Alert! Your Friend Crossed the border while fishing. Make sure legal remedies to save your friend'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
