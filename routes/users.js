'use strict';

const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const knex = require('../knex');

// var db = require('../knexfile.js')['development'];
// var knex = require('../knex')(db);

router.get ('/' , (req, res, next) => {
  // console.log('get users route connected!');
  // res.send('users get route is connected');

  knex('users')
    .select ('id', 'name')
  .then((results) => {
    res.send(results);
    // console.log(results.data[0]);
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/', (req,res,next) => {
  console.log("getting to users post route")
  const name = req.body.name;
  const password = req.body.password;
  console.log(name, 'prehashed :' + password);

  var hash = bcrypt.hashSync(req.body.password, 8);
  console.log(hash);
  // res.send({name: req.body.name, hash: hash});
  //
  knex('users')
    .where({name: name})
    .then(function (results) {
      console.log(results);
     	if (results.length === 0) {
        // console.log("length is 0!");
           knex('users')
           .insert({
               name: name,
               hashed_password: hash
           })
           .then(function (results) {
             res.send("User Created");
             console.log(results);
           })
           .catch(function (err) {
             next(err);
           });
         } else {
           res.status(400).send('User Already Exists');
         }
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
