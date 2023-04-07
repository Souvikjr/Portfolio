const express = require("express");
const {newmassage} = require('../controler/massagecontroler')




const router = express.Router()


router.route('/massagesend').post(newmassage)



module.exports = router