const express = require('express');
const ExpressError = require("./expressError");
const utils = require('./utils');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', function(req, res, next) {
    try {
        utils.checkForInput(req.query.nums);
        let nums = req.query.nums.split(',');
        let ints = utils.verifyInput(nums);
        let num = utils.findMean(ints);
        return res.json({'response' : { operation : 'mean', value: num}})
    } catch(e){
        return next(e);
    }

});

app.get('/median', function(req, res, next) {
    try {
        utils.checkForInput(req.query.nums);
        let nums = req.query.nums.split(',').sort();
        let ints = utils.verifyInput(nums);
        let median = utils.findMedian(ints);
        return res.json({'response' : { operation : 'median', value : median}})
        
    } catch(e){
        return next(e);
    }

});

app.get('/mode', function(req, res, next) {
    try {
        utils.checkForInput(req.query.nums);
        let nums = req.query.nums.split(',');
        let ints = utils.verifyInput(nums);
        let modes = utils.findMode(ints);
        return res.json({'response' : { operation : 'mode', value: modes}})
    } catch(e){
        return next(e);
    }

});


// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
  });
  
  // generic error handler
  app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;
  
    // set the status and alert the user
    return res.status(status).json({
      error: {message, status}
    });
  });
  // end generic handler

app.listen(3000, function () {
    console.log('App on port 3000');
  })