'use strict';

const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get ('/' , (req, res, next) => {
  // res.send('users get route is connected');

  knex('users')
    .select ('id', 'name')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/', (req,res,next) => {
  // console.log("getting to users post route")
  const name = req.body.name;
  const password = req.body.password;
  // console.log(name, 'prehashed :' + password);

  var hash = bcrypt.hashSync(req.body.password, 8);
  // console.log(hash);
  // res.send({name: req.body.name, hash: hash});

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
           })
           .catch(function (err) {
             next(err);
           });
         } else {
           res.status(400).send('User Already Exists');
         }
       });
 });

 // router.post('/', (req,res,next) => {
 //   const name = req.body.name;
 //   const password = req.body.password;
 //   console.log("getting to users login post route");
 //  //  if (!req.body.name || !req.body.password) {
 //  //    res.sendStatus(400);
 //  //  }
 //
 //   knex('users')
 //   .where({name: name})
 //   .first()
 //   .then(function (result){
 //     if (!result || !bcrypt.compareSync(req.body.password,result.password_hash)) {
 //       res.sendStatus(401);
 //     } else {
 //       console.log('success');
 //     }
 //   });
 // });

module.exports = router;
