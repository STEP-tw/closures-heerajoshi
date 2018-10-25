const makeConstant = function(arg){
  return function(){
    return arg;
  }
}

const makeCounterFromN = function(number){
  return function(){
    return number++
  }
};

const makeCounterFromZero = function(){
  let number = 0;
  return function(){
    return number++
  }
};
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
