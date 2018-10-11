let express         =       require('express')
    ,router         =       new express.Router()
    ,appRoute       =       require('./appRoute');
    

router.use('/app',appRoute);

module.exports = router;    
