//intialize as a JS project
//npm init -y

// install twillio
//npm install twillio

//install dotenv to keep credentials in.env
//npm install dotenv

// create and edit the .env file, add these two lines:
// TWILIO_ACCOUNT_SID='copy and paste from Twilio'
// TWILIO_AUTH_TOKEN='copy and paste from Twilio'

//complete the following code in order to send a message

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
console.log(accountSid);
const autheToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid,autheToken);
client.messages.create({
  body:'This is a test text message!',
  from: 'sender's number',
  to:'receiver's number'
})
  .then(message =>console.log(message))
  .catch((err)=>console.log(err));

