const chance = require('chance').Chance();
const Random = require('../lib/models/Random');
const seedData = () => {
  return Promise.resolve(
    Random.create({
      text: chance.sentence()

    })
  );
};

module.exports = seedData;
