const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "your-email",
        pass: "your-password"
    }
});

function sendEmail(email, text, title) {
    return transport.sendMail({
        from: "Rezendes Modas <your-email>",
        to: email,
        subject: title,
        html: `<h1>${title}</h1>`,
        text: text,
    });
}

module.exports = sendEmail;
