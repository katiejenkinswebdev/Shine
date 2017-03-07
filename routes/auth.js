'use strict';

var bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();
const knex = require('../knex');

router.get('/',(req,res,next) => {
  res.send('Getting to index.js GET route');
  });

 router.post('/login', (req,res,next) => {
   console.log("getting to post /login route");
  //  if (!req.body.username || !req.body.password) {
  //    res.sendStatus(400);
  //  }
   // 
  //  knex('users')
  //    .where({username: req.body.username})
  //    .first()
  //    .then(function (result) {
  //       if (!result || !bcrypt.compareSync(req.body.password,result.password_hash)) {
  //        res.sendStatus(401);
  //      } else {
  //        console.log('in else block');
  //      }
  //  });
 });

module.exports = router;
