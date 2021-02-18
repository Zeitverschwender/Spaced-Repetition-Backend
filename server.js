const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
require("dotenv").config();

//Setup Passport
require("./passport")(passport);

//Setup App
const app = express();

app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL],
  })
);

app.use(express.json());

//Session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "keyboard cat",
    resave: true,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      sameSite: "lax",
      httpOnly: true,
      maxAge: 1000 * 60 * 15,
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 8000;

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
const userRoute = require("./routes/user");
const itemsRoute = require("./routes/repeatingItems");
const intervalsRoute = require("./routes/repeatingIntervals");
const authRoute = require("./routes/auth");
//Route Middleware
app.use("/repeatingitems", itemsRoute);
app.use("/repeatingintervals", intervalsRoute);
app.use("/auth", authRoute);
app.use("/user", userRoute);

//Error handler middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err.message);
});

app.get("/", (req, res) => {
  res.send("You are in the homepage 1 !!");
});

app.get("/login", (req, res) => {
  res.send(req.sessionID);
});
app.get("/loggedout", (req, res) => {
  res.send("You are logged out :(");
});
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
