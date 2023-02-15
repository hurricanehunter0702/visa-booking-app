const mongoose = require("mongoose");

const ContactMailSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    senderEmail: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const ContactMail = mongoose.model('ContactMail', ContactMailSchema);

module.exports = ContactMail;
