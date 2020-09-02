const ExpressError = require("./expressError");

function verifyInput(nums){
    let ints = [];
    nums.forEach(num => {
        let x = parseInt(num);
        if(isNaN(num)){
            throw new ExpressError(`${num} is not a number`, 400);
        }
        ints.push(x);
    });
    return ints;
}

function checkForInput(nums){
    if(nums == undefined || nums.length < 1){
        throw new ExpressError(`nums are required`, 400);
    }
    return;
}


function findMean(ints){
    let num = 0;
    for(let i = 0; i < ints.length; i++){
        num = num + ints[i];
    }
    num = num / ints.length;
    return num;
}

function findMedian(ints){
    ints.sort(function(a,b){
        return a - b;
    });
    if(ints.length % 2 == 0){
        let low = Math.floor(ints.length / 2) - 1; 
        let median = (ints[low] + ints[low+1])/2;
        return median;
    } else {
        let mid = Math.floor(ints.length / 2);
        let median = ints[mid];
        return median;
    }
}

function findMode(ints){
    let xints = ints;
    let libKeys = [];
    let library = {};
    xints.forEach(num => {
        if(libKeys.includes(num) == false){
            libKeys.push(num);
            library[num] = 1;
        } else {
            library[num] += 1;
        }
    });
    let vals = Object.values(library);
    let mode_count = 0;
    vals.forEach(val => {
        if(val > mode_count){
            mode_count = val;
        }});
    let modes = [];
    let keys = Object.keys(library);
    keys.forEach(key => {
        if(library[key] == mode_count){
            modes.push(key);
        }
    });
    return modes;
}

  module.exports = {verifyInput, checkForInput, findMean, findMedian, findMode};