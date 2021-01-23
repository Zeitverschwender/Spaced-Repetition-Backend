const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
require("dotenv").config();

//Setup Passport
require('./passport')(passport);

//Setup App
const app = express();

app.use(cors());

app.use(bodyParser.json());

//Session
app.use(session({
  secret: process.env.SESSION_SECRET||'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));
//Passport Middleware
app.use(passport.initialize());
app.use(passport.session())

const port = process.env.PORT || 8000;

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) {
      console.log(`Failed to Connect to MongoB. Error: ${err}`);
    } else {
      console.log("Connectd to MongoDB");
    }
  }
);

//Import Routes
const itemsRoute = require("./routes/repeatingItems");
const intervalsRoute = require("./routes/repeatingIntervals");
const authRoute = require("./routes/auth");
//Routes
app.use("/repeatingitems", itemsRoute);
app.use("/repeatingintervals", intervalsRoute);
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("You are in the homepage!!");
});
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
