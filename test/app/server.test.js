var request = require('supertest');
var expect = require('chai').expect;

var server = require('../../server');

describe('Server', function() {
  describe('GET /api/data', function() {
    it('responds with default data', function(done) {
      request(server)
        .get('/api/data')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res.body.data).to.equal('default data');
          done();
        });
    });
  });

  describe('POST /api/data', function() {
    it('responds with success', function(done) {
      request(server)
        .post('/api/data')
        .send({data: 'new data'})
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res.statusCode).to.equal(200);
          expect(res.body.data).to.equal('new data');
          done();
        });
    });
  });

  describe('GET /api/data', function() {
    it('responds with new data', function(done) {
      request(server)
        .get('/api/data')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res.body.data).to.equal('new data');
          done();
        });
    });
  });
});
