// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
let cookieSession = require("cookie-session");
const MessagingResponse = require('twilio').twiml.MessagingResponse;

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: [
      "I like potatoes and gravy and cheese",
      "I prefer filtered coffee over espresso, sometimes",
    ],
  })
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const booksRoutes = require("./routes/books");
const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/books", booksRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
// req.session.user_id = users.id;

app.get("/login", (req, res) => {
  const templateVars = {
    user: users[req.session.user_id],
  };
  res.redirect("/books");
});


app.get("/", (req, res) => {
  res.redirect("/books");
});

app.get("/post", (req, res) =>{
  res.render("post");
});

app.post("/sms", (req, res) =>{
  // Start our TwiML response.
  const twiml = new MessagingResponse();

  // Add a text message.
  const msg = twiml.message('SMS successly sent!');

  // Add a picture message.
  msg.media('public/images/MessageSent.png');

  // require('dotenv').config();
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  console.log(accountSid);
  const autheToken = process.env.TWILIO_AUTH_TOKEN;
  let fromNumber = process.env.TWILIO_FROM_NUMBER;//replace with current user's phone number
  let toNumber = process.env.TWILIO_TO_NUMBER;
  let messageToSend = req.body.messageText;
  // console.log(fromNumber);
  // console.log(toNumber);
  // console.log(messageToSend);
  // console.log(messageToSend);
  // let id = req.session;
  // console.log("id:",id);

  //Uncomment the next line of code to send SMS message
  // sendSMS(fromNumber, toNumber, messageToSend);

  function sendSMS(fromNumber,toNumber,messageToSend) {


    const client = require('twilio')(accountSid,autheToken);


    client.messages.create({
      body:`${messageToSend}`,
      from: `${fromNumber}`,
      to:`${toNumber}`
    })
      .then(message =>console.log(message))
      .catch((err)=>console.log(err));
  }







  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString(),);



});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
