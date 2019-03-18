const { Router } = require('express');
const Random = require('../models/Random');

module.exports = Router()
  .get('/', (req, res, next) => {
    Random
      .find()
      .then(random => res.send(random))
      .catch(next);
  });
