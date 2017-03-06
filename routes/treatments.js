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

//TODO Test and finish - do I need?
// router.get('/:id' , (req, res, next) => {
//   console.log('get by id connected');
//   const id = req.params.id;
//
//   knex('treatments')
//     .select ('id', 'seconds' , 'rating' , 'users_id' , 'created_at')
//     .where('id' , id)
//
//   .then((results) => {
//     console.log(results[0]);
//     res.send(results[0]);
//   })
//   .catch((err) => {
//     next(err);
//   });
// });

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

//TODO need patch or delete routes?
// router.patch('/:id' , (req, res, next) => {
//   // console.log('patch route connected');
//   const id = req.params.id;
//   const title = req.body.title;
//   const description = req.body.description;
//   const price = req.body.price;
//   const item_image = req.body.item_image;
//   // console.log(title, description, price, item_image);
//
//   knex('classifieds')
//     .update({title, description, price, item_image})
//     .where('id' , id)
//     .returning(['id' , 'title' , 'description', 'price' , 'item_image', 'updated_at'])
//
//   .then((results) => {
//     res.send(results[0]);
//     // console.log(results);
//   })
//   .catch((err) => {
//     next(err);
//   });
// });
//
// router.delete('/:id' , (req, res, next) => {
//   // console.log('delete route connected');
//   const id = req.params.id;
//
//   knex('classifieds')
//     .where ('id', id)
//     .del()
//     .returning(['id','title' , 'description' , 'price' , 'item_image'])
//
//   .then((results) => {
//     res.send(results[0]);
//   })
//   .catch((err) => {
//     next(err);
//   });
// });
//

module.exports = router;
