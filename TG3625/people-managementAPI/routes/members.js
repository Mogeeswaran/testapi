var express = require('express');
var router = express.Router();
var membersService = require('../services/membersServices');

router.post('/', (req, res) => {
    console.log('inside register routes');
    membersService.loginuser(req.body, (err, data) => {
        if (!err) {
            var status = {
                info: 'user successfully login',
                doc: data
            }
            res.json(status);
        } else {
            res.json(err);
        }
    })
})

router.post('/addmember',function(req,res,next){
    membersService.addMembers(req.body, function (err, data) {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    });
});

router.get('/getmember',function(req,res,next){
    membersService.getMembers(function(err,data){
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    })
})

router.put('/:id', function (req, res, next) {
    console.log('update'+req.params.id);
    console.log(req.body);
    membersService.updateMember(req.params.id, req.body, function (err, data) {
        if (!err) {

            membersService.getMemberByID(req.params.id, function (_err, _data) {
                if(!_err){
                    res.json(_data);
                }else{
                    res.json(_err);
                }
            });           
        } else {
            res.json(err);
        }
    });
   
});

router.post('/delete', function (req, res,next) {
    console.log('InsideDelete'+req.body);
    membersService.deleteMember(req.body,(err, data) => {
        if(!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    })
})



module.exports = router;