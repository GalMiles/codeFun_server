const mongoose = require('mongoose');


const codeSchema = new mongoose.Schema({
    title: String,
    code: String
});

mongoose.model('CodeBlock', codeSchema);

module.exports = mongoose.model('CodeBlock');


