
const mongoose = require('mongoose');
const CodeBlock = require('./CodeBlock.js');

const uri = 'mongodb+srv://galmiles:galmilespassword@codingeditor.ougrvl6.mongodb.net/?retryWrites=true&w=majority'

async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log('connected to db');
    }
    catch(error) {
        console.log('error connecting to db', error);
    }
}
 async function getCodeBlocks() {
    const codeBlocks = await CodeBlock.find();
    // console.log(codeBlocks);
    return codeBlocks;
}

module.exports = {connectDB, getCodeBlocks};
