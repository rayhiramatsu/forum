//---------- Dependencies ----------//
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const db = mongoose.connection;

//---------- Configuration ----------//
const app = express();
const PORT = 7777;
//---------- Middleware ----------//
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//---------- Database ----------//
mongoose.connect(
    'mongodb://localhost:27017/forum',
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



//---------- Routes ----------//

// app.get('/', (req, res)=>{
//     res.send("hello world!");
// })
//---------- Listener ----------//
app.listen(PORT, ()=>{
    console.log('🍀Listening on port🍀', PORT);
})
