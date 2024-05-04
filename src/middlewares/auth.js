const formatURL = require('../utils/formatURL');
const jwt = require('jsonwebtoken');

const auth = (title) => {
    return (req, res, next) => {
        const { token } = req.cookies;
        const url = formatURL(req.url);

        if (token) {
            const userInfo = jwt.verify(token, process.env.TOKEN_SECRET);
            res.render(url, {
                title,
                name: userInfo.nome,
                email: userInfo.email
            });
        } else {
            res.status(301).redirect('/login');
        }
    };
};

module.exports = auth;