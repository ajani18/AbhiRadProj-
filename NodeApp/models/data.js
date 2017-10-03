var mongoose = require('mongoose');

var classSchema = mongoose.Schema({
    name: String
});

var Data = mongoose.model('Data', classSchema);

module.exports = Data; //exporting
