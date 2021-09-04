const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    messageBody: {
        type: String,
        required: true,
    },
    photo: {
        data: Buffer,
        contentType: String
    }
})