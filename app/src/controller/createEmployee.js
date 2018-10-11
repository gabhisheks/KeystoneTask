let mongoose        =       require('mongoose');


module.exports.createData = function(req,res){

    let Emp =  mongoose.model('Employee');
    new Emp({
        fname:req.fname,
        lname:req.lname,
        gender:req.gender,
        address:req.address
    })
    .save()
    .then(result =>{ res.send(result+`    data is successfully created.`)})
    .catch(err=>{res.send(`Opps! Error occoured.`)})
}