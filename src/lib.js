const makeConstant = function(arg){
  return function(){
    return arg;
  }
}

//==================

const makeCounterFromN = function(number){
  return function(){
    return number++
  }
};

//==================

const makeCounterFromZero = function(){
  let number = 0;
  return function(){
    return number++
  }
};

//==================

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

//==================

const makeFiboGenerator = function(firstNum, secondNum){
    let lastNum = -secondNum;
  let currentNum = secondNum -1;

  if(!firstNum){
    firstNum = 1;
  }
  if(!secondNum){
    lastNum = -1;
    currentNum = 1;
  }

  const fiboseries = function(){
    let sum = Math.abs(lastNum + currentNum);
    let mulresult = sum*firstNum;
    lastNum = currentNum;
    currentNum = sum;
    return mulresult;
  }
  return fiboseries;
}

//==================

const makeCycler  = function(input) {
  let index = 0;
  let newArray = input.slice();
  let length = newArray.length;
  return function() {
    let output = newArray[index++];
    if (index == newArray.length) {
      index = 0;
    }
    return output;
  }
}

//==================

const curry = function(functionFirst, number) {
  return function(firstNum,secondNum) {
    return functionFirst(number, firstNum, secondNum);
  }
}

//==================

const compose = function(function1, function2) {
  return function(list1, list2) {
    return function1(function2(list1, list2));
  }
};

//==================

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
