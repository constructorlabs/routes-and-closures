// api.js
const express = require('express');
const router = express.Router();

module.exports = function(increment) {

  router.get('/testing', function(req, res) {
    res.json({
      didItWork: 'yes'
    });
  });

  router.get('/counter', function(req, res) {
    const incrementedCnt = increment(); // we don't have increment :(
    res.json({
      counter: incrementedCnt
    });
  });

  return router;
};
