const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const router = express.Router();
router.use(cookieParser());

router.get('/', (req, res) => {
    const { token } = req.cookies
    
    if (token) {
        const userInfo = jwt.verify(token, process.env.TOKEN_SECRET);
        res.render('index', { 
            title: 'Home - Rezendes moda',
            name: userInfo.nome,
            email: userInfo.email
        })
    } else {
        res.render('index', { title: 'Home - Rezendes moda'  })
    }
})

module.exports = router