const router = require('express').Router();

router.post('/signin', (req, res) => {
    console.log(req.body);
    res.json('signin ok !')
})

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.json('signup ok !')
})

module.exports = router;
