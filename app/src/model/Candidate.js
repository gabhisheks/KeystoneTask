let mongoose        =       require('mongoose')
    ,schema         =       mongoose.Schema;

let CanSchema   =   new schema({
    refName : {
        type: schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    fname:String,
    lname:String,
    gender:{
    type : String,
    enum : ['male','female']
    },
    address:String
},{versionKey:false,timestamps:true});

module.exports = mongoose.model('Candidate',CanSchema);