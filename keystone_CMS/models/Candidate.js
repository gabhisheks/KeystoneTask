let keystone        =       require('keystone')
    ,Types          =       keystone.Field.Types
    ,candidate      =       new keystone.List('Candidate',{map :{name:'fname'}});

candidate.add({

    refName : { 
        type: Types.Relationship, 
        ref: 'Employee',
        many: true
    },
    fname:String,
    lname:String,
    gender:{
        type:   Types.Select,
        options: 'male, female, other' 
    },
    address:String
});

candidate.register();   
