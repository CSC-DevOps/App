const assert = require('assert');
const expect = require('chai').expect;
const main = require('../main')
const got   = require('got');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('main', function() {
    describe('#start()', function() {
      it('should start server on port 9001', function(done){

        (async () => {

            await main.start();

            try {
                const response = await got('http://localhost:9001', {timeout:500});
                console.log(response.body);

                expect(response.body).to.contain('Hi From');

            } catch (error) {
                console.error(error.code || error.statusCode);
            }

            await main.stop();
            done();
        })();
      });
    });
  });