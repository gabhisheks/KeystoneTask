let keystone        =       require('keystone')
    ,Types          =       keystone.Field.Types
    ,employee       =       new keystone.List('Employee',
                            {
                                map:{name:'fname'},
                                defaultSort:'fname',
                                defaultColumns: 'lname,fname'
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
