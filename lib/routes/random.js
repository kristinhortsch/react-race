const { Router } = require('express');
const Random = require('../models/Random');

module.exports = Router()
  .get('/', (req, res, next) => {
    Random
      .findOne()
      .then(random => res.send(random))
      .catch(next);
  });
