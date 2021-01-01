const router = require('express').Router();
const data = require('../models/data.model');

router.route('/').get((req, res) => {
    data.find()
        .then(UserData => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const category = req.body.category;
    const location = req.body.location; 
    const radius = req.body.radius;

    const data = new UserQuery({
        username,
        category,
        location,
        radius,
    });

})