var express = require('express');
var router = express.Router();
import Person from '../models/person';

// todo https://habrahabr.ru/post/193458/

router.get('/persons', function (req, res) {
    return Persons.find().then((persons) => {
        res.send(persons);
    }).catch((err) => {
        res.statusCode = 500;
        return res.send({error: 'Server error'});
    });
});

export default router;