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

const makeDeltaTracker = function(number){
  let result = {};
  return function(delta){
    if(!delta){
      delta = 0;
    }
    result.old = number;
    result.delta = delta;
    result.new = result.old + result.delta;
    if(delta < 0){
      number--;
    }else{
      number++;
    }
    return result;
  }
}


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
