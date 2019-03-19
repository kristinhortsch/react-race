const chance = require('chance').Chance();
const Random = require('../lib/models/Random');

const seedData = () => {
  return Promise.all(
    [...Array(100)].map(() => {
      return Random.create({
        text: chance.sentence()
      });
    })
  );
};

module.exports = seedData;
