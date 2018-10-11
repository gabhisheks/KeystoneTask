let mongoose        =       require('mongoose');


module.exports.createData = function(req,res){

    let Emp =  mongoose.model('Employee');
    new Emp({
        fname:req.body.fname,
        lname:req.body.lname,
        gender:req.body.gender,
        address:req.body.address
    })
    .save()
    .then(result =>{ res.send(result+`    data is successfully created.`)})
    .catch(err=>{res.send(`Opps! Error occoured.`)})
}