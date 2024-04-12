const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mrinteltv2020@gmail.com',
        pass: 'Aseef@04'
    }
});

// Setup email data
let mailOptions = {
    from: 'mrinteltv2020@gmail.com',
    to: 'mohamaseef@gmail.com',
    subject: 'Test Email',
    text: 'Hello, this is a test email!'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
