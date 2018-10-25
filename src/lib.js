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
  return makeCounterFromN(0);
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
    return  Object.assign({}, result);
  }
}

//==================

const makeFiboGenerator = function(firstNum, secondNum){

  if(!firstNum && !secondNum){
    firstNum = 0;
    secondNum =1;
  }
  if(firstNum && !secondNum){
    secondNum   =firstNum;
    firstNum = 0;
  }

return function(){
    let temp  = firstNum;
  firstNum = secondNum;
    secondNum = firstNum + temp;
    return temp;
  }
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
