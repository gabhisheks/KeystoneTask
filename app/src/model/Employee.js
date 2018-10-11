let mongoose        =       require('mongoose')
    ,schema         =       mongoose.Schema;

let EmpSchema   =   new schema({
    fname:String,
    lname:String,
    gender:{
    type : String,
    enum : ['male','female']
    },
    address:String
},{versionKey:false,timestamps:true});

module.exports = mongoose.model('Employee',EmpSchema);