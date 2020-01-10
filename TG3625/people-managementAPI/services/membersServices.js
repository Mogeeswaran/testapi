var Members= require('../models/members');

exports.addMembers = function(formData, callback){
    var membersDao = new Members(formData)

    membersDao.save(function(err, data){
        if (!err) {
            console.log(data);
        } else {
            console.log(err);
        }
        callback(err, data); 
    });
}

exports.getMembers = function(callback){
    Members.find(function(err,data){
        if(!err){
            console.log(data);
        }else{
            console.log(err);
        }
        callback(err,data);
    });
}