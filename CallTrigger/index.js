const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);

    module.exports = function (context) {
       client.calls
       .create({
                 url: process.env.TWIML_URL,
                 to: process.env.RECIPIENT_NUMBER,
                 from: process.env.SENDER_NUMBER,
           })
      .then(call => {
           context.log("Call sent");
           context.res = {
               // status: 200, /* Defaults to 200 */
               body: 'Call successfully sent'
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