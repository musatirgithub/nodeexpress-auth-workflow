const nodemailer = require('nodemailer');

const sendEmail = async()=>{
    let testAccount = await nodemailer.createTestAccount();

    // const transporter = nodemailer.createTransport({
    //     host: process.env.ETHEREAL_HOST,
    //     port: process.env.ETHEREAL_PORT,
    //     auth: {
    //         user: process.env.ETHEREAL_USER,
    //         pass: process.env.ETHEREAL_PASS,
    //     }
    // });

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure:false,
        tls:{
            rejectUnauthorized:false
          },
        auth: {
            user: 'leta94@ethereal.email',
            pass: 'kVsXRdK869H3vFKnF6'
        }
    });

    let info = await transporter.sendMail({
        from: '"Coding addict" <codingaddict@gmail.com>',
        to: 'user@user.com',
        subject: 'Testing Email',
        text: 'Hello World',
        html: '<h2>Testing Email</h2>',
      });
}

module.exports = sendEmail;