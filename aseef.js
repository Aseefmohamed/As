const accountSid = 'ACda4b698b17d826a87973bc90821240c9';
const authToken = '6c6ff41193b1633cd6e4147c712c901b';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Warning your frd croborder!',
    from: '+12513698431',
    to: '+918015868478'
  })
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));
