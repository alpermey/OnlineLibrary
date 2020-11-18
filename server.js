const nodemailer = require('nodemailer');

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'onlinelibraryabo@gmail.com',
        pass:'alperboodin'
    }
});

// Step 2
let mailOptions = {
    from: 'onlinelibraryabo@gmail.com',
    to: 'alpermeydan16@gmail.com',
    cc: 'onlinelibraryabo@gmail.com',
    subject: 'Testing',
    text: 'It works'
};

// Step 3
transporter.sendMail(mailOptions, function(err, data){
    if(err){
        console.log('Error Occurs',err);
    } else {
        console.log('Email sent!!!');
    }
});