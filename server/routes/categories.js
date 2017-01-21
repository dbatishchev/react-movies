var express = require('express');
var router = express.Router();
import Category from '../models/category';

// todo https://habrahabr.ru/post/193458/

router.get('/categories', function (req, res) {
    return Category.find().then((categories) => {
        res.send(categories);
    }).catch((err) => {
        res.statusCode = 500;
        return res.send({error: 'Server error'});
    });
});

export default router;