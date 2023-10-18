const nodemailer = require('nodemailer');
const nodeMailerConfig = require('../utils/nodeMailerConfig')

const sendEmail = async({to, subject, html})=>{
    let testAccount = await nodemailer.createTestAccount();

    // const transporter = nodemailer.createTransport({
    //     host: process.env.ETHEREAL_HOST,
    //     port: process.env.ETHEREAL_PORT,
    //     auth: {
    //         user: process.env.ETHEREAL_USER,
    //         pass: process.env.ETHEREAL_PASS,
    //     }
    // });

    const transporter = nodemailer.createTransport(nodeMailerConfig);

    return transporter.sendMail({
        from: '"Coding addict" <codingaddict@gmail.com>',
        to,
        subject,
        html,
      });
}

module.exports = sendEmail;