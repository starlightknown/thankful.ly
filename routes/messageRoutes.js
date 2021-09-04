const express = require('express')
// const sendMessage = require('../controllers/messageController')

const router = express.Router()


router.post('/sendMessage', (req, res) => {
    let { sendTo, messageBody } = {...req.body}
    console.log(sendTo, messageBody)
    let accountSid = process.env.TWILIO_ACCOUNT_SID;
    let authToken = process.env.TWILIO_AUTH_TOKEN;

    let client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            to: sendTo,
            from: process.env.FROM,
            body: messageBody,
        })
        .then(message => res.send(message.sid))
        .catch(err => res.status(500).json(err));
})

module.exports = router