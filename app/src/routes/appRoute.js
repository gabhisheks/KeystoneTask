let express                 =       require('express')
    ,routesDependencies     =       require('./routesDependecies').default
    ,appRouter              =       express.Router();


appRouter.post('/create/employee',routesDependencies.createEmployee.createData);    

module.exports  =   appRouter;

