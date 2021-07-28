//---------- Dependencies ----------//
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const db = mongoose.connection;
require('dotenv').config();

//---------- Configuration ----------//
const app = express();
const PORT = process.env.PORT || 7777;
// const PORT = 7777;
//---------- Middleware ----------//
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//---------- Database ----------//
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(
    MONGODB_URI,
    // "mongodb://localhost:27017/forum",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    () => {
        console.log('The connection with mongod is established')
    }
)


//---------- Controllers ----------//
const forumController = require('./controllers/forum_controller.js');
app.use('/', forumController);


// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
//---------- Routes ----------//

// app.get('/', (req, res)=>{
//     res.send("hello world!");
// })
//---------- Listener ----------//
app.listen(PORT, ()=>{
    console.log('🍀Listening on port🍀', PORT);
})
