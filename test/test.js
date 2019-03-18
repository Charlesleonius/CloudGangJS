var assert = require('assert');
var chai = require('chai')
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
let should = chai.should();
let server = require('../app');


/*
* Place holder to make sure tests are running on jenkins
*/
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('Verify server is running', () => {
    it('It should be able to reach /', () => {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                console.log(err);
                res.should.have.status(200);
                res.body.message.should.eql('Hello world!');
        });
    });
});


