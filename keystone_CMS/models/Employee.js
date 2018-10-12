let keystone        =       require('keystone')
    ,Types          =       keystone.Field.Types
    ,employee       =       new keystone.List('Employee',
                            {
                                map:{name:'fname'},
                                defaultSort:'fname',
                                defaultColumns: 'fname,lname',
                                track: true
                            });

employee.add({
    fname:String,
    lname:String,
    gender: {
        type: Types.Select,
        options: 'male, female, other'
    },
    address: String
});

employee.register();   

/**
 *          Hello world!...
 *          here is prdxn
 * 
 * 
 * 
*/