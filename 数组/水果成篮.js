var totalFruit = function (fruits) {
  const BASKETS = 2;
  const map = new Map([]);
  let resultLen = 0;
  const len = fruits.length;
  for (let j = 0, i = 0; j < len; j++) {
    const value = map.get(fruits[j]);
    map.set(fruits[j], value === undefined ? 1 : value + 1);
    while (map.size > BASKETS) {
      const iValue = map.get(fruits[i]);
      if (iValue - 1 === 0) {
        map.delete(fruits[i])
      } else {
        map.set(fruits[i], iValue - 1)
      }
      i++;
    }
    if (j - i + 1 > resultLen) {
      resultLen = j - i + 1;
    }
  }
  return resultLen;
};

const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
console.log(totalFruit(fruits))// [1,2,1,1,2]