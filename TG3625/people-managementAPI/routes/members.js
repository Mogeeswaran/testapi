var express = require('express');
var router = express.Router();
var membersService = require('../services/membersServices');

router.post('/',function(req,res,next){
    membersService.addMembers(req.body, function (err, data) {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    });
});

router.get('/',function(req,res,next){
    membersService.getMembers(function(err,data){
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    })
})

module.exports = router;