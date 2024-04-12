const accountSid = 'ACda4b698b17d826a87973bc90821240c9';
const authToken = '65227ded3a0fbf7d50b39557934772aa';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Hello Aseef! ',
    from: '+12513698431',
    to: '+918015868478'
  })
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));
