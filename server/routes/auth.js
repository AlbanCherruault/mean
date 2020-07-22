const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

router.post('/signin', (req, res) => {
    console.log(req.body);
    res.json('signin ok !')
})

router.post('/signup', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password:bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8))
    })

    newUser.save( (err) =>{
        if (err) {res.status(500).json('erreur signup')}
        res.status(200).json('signup ok !!');
    })
})

module.exports = router;
