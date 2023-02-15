const ContactMail = require('../models/ContactMail');
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const Contactus = async (req, res) => {
    try {
        let mail = req.body.mailInfo;
        await sgMail.send({
            to: "info@irvisa.online",
            from: "hello@irvisa.online",
            subject: mail.subject,
            html: `<div>
                <p>From: ${mail.email}</p>
                <p>Content: ${mail.message}</p>
            </div>`
        });
        mail = await ContactMail.create({
            name: mail.name,
            senderEmail: mail.email,
            subject: mail.subject,
            message: mail.message
        });
        res.json({
            status: true,
            msg: "Successfully sent."
        });
    } catch(err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

module.exports = {
    Contactus
}