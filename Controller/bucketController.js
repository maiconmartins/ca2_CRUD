//reques statement for express
const express = require('express');


var router = express.Router();

//creating a new router using GET function, request and response
router.get('/', (req, res) => {
    res.json('sample'); // this is my response
    
});
//exporting the router from the controller
module.exports = router;