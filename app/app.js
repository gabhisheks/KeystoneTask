require('dotenv').load();
require('./src/requiresAllModels');
require('./src/config/mongodb'); // connect with mongodb
let express         =       require('express')
    ,app            =       express()
    ,bodyParser     =       require('body-parser')
    ,routes         =       require('./src/routes/route');
    

// apply middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// routes.
app.use('/api',routes);


// port listen.
app.listen(process.env.PORT,()=>{console.log(`server is ready to listen on port ${process.env.PORT}`)});

