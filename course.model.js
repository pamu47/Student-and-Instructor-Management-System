var mongoose 		= require('mongoose');
const Schema        = mongoose.Schema;

const courseSchema = new Schema({
    name: {type: String,require: true},
    code: {type: String,require: true},
    pass: {type: String,require: true},
    instructors: [{type: Schema.Types.ObjectId,ref:'Instructor'}],
});

module.exports = mongoose.model('Course', courseSchema);
