const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Setup App
const app = express();

app.use(cors());

app.use(bodyParser.json());

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
//Routes
app.use("/repeatingitems", itemsRoute);
app.use("/repeatingintervals", intervalsRoute);

app.get("/", (req, res) => {
  res.send("You are in the homepage!!");
});
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
