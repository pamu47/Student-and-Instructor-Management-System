var mongoose        = require('./instructor.model');
var instructorSchema   = mongoose.model('Instructor');


var instructorController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var instructor = new instructorSchema({
                firstname: data.firstname,
                lastname: data.lastname,
                faculty: data.faculty,
                dept: data.dept,
                desig: data.desig,
                email: data.email,
                password: data.password
            });
            instructor.save().then(() => {
                resolve({status: 200, message: "Added new instructor"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            instructorSchema.find().exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    }

}

this.getAll = () => {
    return new Promise((resolve, reject) => {
        instructorSchema.find().exec().then(data => {
            console.log(data);
            resolve({status:200,data:data});
        }).catch(err=>{
            reject({status:500,message:"Error :"+err});
        });
    });

}

module.exports = new instructorController();