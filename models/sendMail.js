const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "readbook2059@gmail.com",
        pass: "eqhtcmepzhezqkig"
    }
});

function sendEmail(email, text, title) {
    return transport.sendMail({
        from: "Rezendes Modas <readbook2059@gmail.com>",
        to: email,
        subject: title,
        html: `<h1>${title}</h1>`,
        text: text,
    });
}

module.exports = sendEmail;