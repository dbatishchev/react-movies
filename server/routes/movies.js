var express = require('express');
var router = express.Router();
import Movie from '../models/movie';

// todo https://habrahabr.ru/post/193458/

router.get('/movies', function (req, res) {
    return Movie.find().then((movies) => {
        res.send(movies);
    }).catch((err) => {
        res.statusCode = 500;
        return res.send({error: 'Server error'});
    });
});

router.post('/movies', function(req, res) {
    res.send('This is not implemented now');
});

router.get('/movies/:id', function(req, res) {
    res.send('This is not implemented now');
});

router.put('/movies/:id', function (req, res){
    res.send('This is not implemented now');
});

router.delete('/movies/:id', function (req, res){
    res.send('This is not implemented now');
});

export default router;