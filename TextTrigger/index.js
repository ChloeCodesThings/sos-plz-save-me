const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);

// This can also be accomplished with a Twilio output binding- you can read more on this at http://aka.ms/AA4n3j3

module.exports = function (context) {
 client.messages
 .create({ from: process.env.SENDER_NUMBER,
           body: 'Hey- please call me ASAP. Locked out of apartment ',
           to: process.env.RECIPIENT_NUMBER
       })
        .then(message => {             
           context.log("Message sent");
           context.res = {
               // status: 200, /* Defaults to 200 */
               body: 'Text successfully sent'
           };                                
           context.done();
        }).catch(err => {
          context.log.error("Twilio Error: " + err.message + " -- " + err.code);
          context.res = {
                   status: 500,
                   body: `Twilio Error Message: ${err.message}\nTwilio Error code: ${err.code}`
               };
          context.done();
        });
}