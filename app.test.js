const utils = require('./utils');


describe("perform mean,median,mode", function () {

    test('return mean', function () {
      let mean = utils.findMean([5, 5, 5]);
      expect(mean).toEqual(5);
    });
  
    test('return median with odd number of inputs', function () {
      let median = utils.findMedian([1,2,3]);
      expect(median).toEqual(2);
    });
  
    test('return median with even number of inputs', function () {
        let median = utils.findMedian([1,2,3,4]);
        expect(median).toEqual(2.5);
    });

    test('return single mode', function () {
        let mode = utils.findMode([1,2,3,3,4,5]);
        expect(mode).toEqual(['3']);
    });

    test('return multiple modes', function () {
        let mode = utils.findMode([1,2,3,3,4,4]);
        expect(mode).toEqual(['3','4']);
    });

  });