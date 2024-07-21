const express = require('express');
const route = express.Router();
const eventController = require('../Controller/api');
const recommendController= require('../Controller/recomm')
const movieController = require('../Controller/movies')
const detailController = require('../Controller/detail')

route.get('/event',eventController.getNewEvent);
route.get('/upcoming',eventController.getComingEvent);
route.get('/detail',eventController.detailPage);
route.get('/latest',eventController.latestPage);
route.get('/recommend',recommendController.getRecommend);
route.get('/movies', movieController.getMovies);
route.get('/movies/:id', movieController.getMoviesById);
route.get('/movie/:id', movieController.getMoviesByIds);
route.post('/postDetails', detailController.postDetails);
route.get('/getDetails', detailController.getDetails);
route.get('/getDetails/:id',detailController.getDetailsById);
module.exports = route;