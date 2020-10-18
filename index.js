// Your code here

function mapToNegativize(sourceArray) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(-1 * sourceArray[i]);
  }
  return arr;
}
mapToNegativize([1, 2, 3, -9]);

let dune = ["paul", "gurney", "vladimir", "jessica", "chani"];
function mapToNoChange(sourceArray) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceArray[i]);
  }
  return arr;
}
mapToNoChange(dune);

function mapToDouble(sourceArray) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(2 * sourceArray[i]);
  }
  return arr;
}
mapToDouble([1, 2, 3, -9]);

function mapToSquare(sourceArray) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceArray[i] * sourceArray[i]);
  }
  return arr;
}

mapToSquare([1, 2, 3, -9]);

const arrNum = [1, 2, 3];
function reduceToTotal(sourceArray, startingPoint = 0) {
  let sum = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
    sum = sum + sourceArray[i];
  }
  return sum;
}

reduceToTotal(arrNum, 0);
reduceToTotal(arrNum, 100);

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === false) return false;
  }
  return true;
}

reduceToAllTrue(sourceArray);

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === true) return true;
  }
  return false;
}

reduceToAnyTrue(sourceArray);
