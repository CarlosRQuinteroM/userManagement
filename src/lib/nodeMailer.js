const nodemailer = require('nodemailer');
require("dotenv").config()

const sendValidationEmail = (email, validationString) => {

    let Transport = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: process.env.GMAIL_USER_APP,// Gmail email here
            pass: process.env.GMAIL_PW_APP//Gmail app password here
        }
    });

    let mailOptions;


    mailOptions = {
        from: {
            name: "Validation email test",
            address: process.env.GMAIL_USER_APP,
        },
        to: [email],
        subject: "Email validation",
        text: "Email validation",
        html: `Press <a href=http://localhost:3000/user/verify/${validationString}>Click Here</a>, to verify your email. Thanks`
    }

    Transport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error)
        } else {
            console.log("Message send")
        }
    })
};

module.exports = sendValidationEmail;