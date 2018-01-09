const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const path = require('path');

const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

/* 
mongoLab database info:

username: feerass
password: iamgamerlink

url ->     mongodb://feerass:iamgamerlink@ds133557.mlab.com:33557/gamerlink
*/

mongoose.connect('mongodb://feerass:iamgamerlink@ds133557.mlab.com:33557/gamerlink');

const port = process.env.PORT || 8080; 

mongoose.Promise = global.Promise;


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log("Connected to db at mlab")
});

const Gamer = require('./models/Gamer.js');

//GET ALL USERS
app.get('/users', function(req,res){
    Gamer.find({})
    .then(gamers => {
        //returns an array of objects
        console.log('Trying to send gamer data')
        res.send(gamers);
    })
    .catch(err => {
        console.log(err);
    })
})

//GET AN INDIVIDUAL USER
app.get('/users/:displayName', function(req,res) {
    console.log(req.params.displayName);
    Gamer.find({"displayName": req.params.displayName})
    .then( gamer => {
        console.log('Sending user data')
        res.send(gamer)
    })
    .catch(err => {
        console.log(err)
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });


// Make sure to include. Connects to localhost
app.listen(port, ()=> {
  console.log('Im listening.')
})
