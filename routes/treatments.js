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
    // console.log(results.data[0]);
  })
  .catch((err) => {
    next(err);
  });
});

// router.get('/:id' , (req, res, next) => {
//   // console.log('get by id connected');
//   const id = req.params.id;
//
//   knex('classifieds')
//     .select('id' , 'title' , 'description' , 'price' , 'item_image')
//     .where('id' , id)
//
//   .then((results) => {
//     res.send(results[0]);
//   })
//   .catch((err) => {
//     next(err);
//   });
// });
//
// router.post('/' , (req, res, next) => {
//   // console.log('post route connected');
//
//   const title = req.body.title;
//   const description = req.body.description;
//   const price = req.body.price;
//   const item_image = req.body.item_image;
//   // console.log(title, description, price, item_image);
//
//   knex('classifieds')
//     .insert({title:title, description:description, price:price , item_image:item_image})
//     .returning(['id', 'title' , 'description', 'price' , 'item_image' , 'updated_at'])
//
//   .then((results) => {
//     res.send(results[0]);
//   })
//   .catch((err) => {
//     next(err);
//   });
// });
//
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
