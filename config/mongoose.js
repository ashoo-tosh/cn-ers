const mongoose = require('mongoose');

const DB = 'mongodb+srv://ashutoshr980:asdewq123@cluster0.jarnohp.mongodb.net/employee-rs';
 
mongoose.connect(DB).then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});

 
module.exports = db;  