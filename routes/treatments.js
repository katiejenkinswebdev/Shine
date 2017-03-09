'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get ('/' , (req, res, next) => {
  console.log('get route connected!');

  knex('treatments')
    .select ('id', 'seconds' , 'rating' , 'users_id' , 'created_at')
  .then((results) => {
    res.send(results);
    // console.log("treatments " , results);
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/' , (req, res, next) => {
  console.log('post route connected');

  const seconds = req.body.seconds;
  console.log(seconds);
  const rating = req.body.rating;
  console.log(rating);
  const users_id = 1;
  console.log(users_id);

  knex('treatments')
    .insert({seconds:seconds, rating:rating, users_id:users_id})
    .returning(['id', 'seconds' , 'rating', 'created_at'])

  .then((results) => {
    res.send(results[0]);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
