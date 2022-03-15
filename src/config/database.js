const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

async function connect(url) {
    try {
        await mongoose.connect(url, {autoIndex: true})
        console.log('Connected to database');
    } catch(error) {
        throw error
    }
}

module.exports = {connect}