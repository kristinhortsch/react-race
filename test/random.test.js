require('dotenv').config();
require('../lib/utils/connect')();
const request = require('supertest');
const app = require('../lib/app');
const mongoose = require('mongoose');
const seedData = require('./seedData');

describe('chirp model', () => {
  beforeEach(() => {
    return seedData();
  });

  afterEach(done => {
    mongoose.connection.dropDatabase(done);
    
  });

  afterAll(done => {
    mongoose.connection.close(done);
  });

  it('gets a list of all chirps', () => {
    return request(app)
      .get('/random')
      .then(res => {
        expect(res.body).toEqual({
          text: expect.any(String),
          _id: expect.any(String),
          __v: 0
        });
      });
  });
});

