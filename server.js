const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//Setup App
const app = express();

app.use(cors());

app.use(bodyParser.json());

const port = process.env.PORT || 8000;


//Connect to DB
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true
    },
    () => {
        console.log('Connected to Database successfully.');
    }
)

//Import Routes
const itemsRoute = require('./routes/repeatingItems');

//Routes
app.use('/repeatingitems', itemsRoute);

app.get('/', (req,res) => {
    res.send('You are in the homepage!!');
})
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
