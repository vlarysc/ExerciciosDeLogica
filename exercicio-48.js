let array = [1, 2, 3, 4, 5];

function mult(array) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    res[i] = array[i] * 2;
  }
  return res;
}

console.log(mult(array));
