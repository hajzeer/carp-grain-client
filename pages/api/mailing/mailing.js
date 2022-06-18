export default function (req, res) {
    const nodemailer = require('nodemailer');
    require('dotenv').config()
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.PUBLIC_NEXT_MAIL,
            pass: process.env.PUBLIC_NEXT_PASS,
        },
        secure: true,
    });

    const mailData = {
        from: process.env.PUBLIC_NEXT_MAIL,
        to: req.body.email,
        subject: `Dziękujemy za zamówienie ${req.body.name}`,
        text: `Dziękujemy za zamówienie, ${req.body.name} w sklepie Carp Grains, \n\n Paczka zostanie przygotowana i wysłana dla Ciebie niezwłocznie, \n\n Ekipa Carp Grains`,
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
}