// Check Database connection is success/failed..
let mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true });

let dbConnection = mongoose.connection;

dbConnection.on("error",(err)=>{console.log(`connection failed with Database := ${err}`)});
dbConnection.once("open",()=>{console.log("Connection Succeeded with Database.");});
