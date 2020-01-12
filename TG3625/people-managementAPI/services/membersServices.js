var Members = require('../models/members');
var Register = require('../models/register');

exports.loginuser = function(data, callback) {
    console.log('inside register service'+data);
    var user = new Register(data);
    user.save((err, doc) => {
        if(!err) {
            console.log(doc);
        }
        else{
            console.log(err);
        }
        callback(err, doc);
    })
}


exports.addMembers = function (formData, callback) {
    var membersDao = new Members(formData)

    membersDao.save(function (err, data) {
        if (!err) {
            console.log(data);
        } else {
            console.log(err);
        }
        callback(err, data);
    });
}

exports.getMembers = function (callback) {
    Members.find(function (err, data) {
        if (!err) {
            console.log(data);
        } else {
            console.log(err);
        }
        callback(err, data);
    });
}

exports.getMemberByID = function (requestID, callback) {
    console.log(requestID);
    Members.findOne({ memberId: requestID }, function (err, data) {
        if (!err) {
            console.log(data);
        } else {
            console.log(err);
        }
        callback(err, data);
    });
}

exports.updateMember = function (urlID, requestData, callback) {
    console.log('inside Service' + requestData);
    console.log(urlID);
    var query = { memberId: urlID };

    console.log(query);
    Members.findOneAndUpdate(query, requestData, function (err) {
        let status;
        if (!err) {
            status = {
                code: 200,
                info: 'Update Successfully'
            }
            console.log('Success');
        } else {
            console.log(err);
        }
        callback(err, status);
    });
}

exports.deleteMember = function (data, callback) {
    Members.findOneAndDelete({ email: data.email }, (err, doc) => {
        if (!err) {
            console.log(doc);
        } else {
            console.log(err);
        }
        callback(err, doc);
    })
}

