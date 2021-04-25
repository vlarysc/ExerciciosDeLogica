var array = [1, 3, 6, 9];
var ArrayDobrado = dobrar(array);

function dobrar(array) {
  var arrayTemp = [];
  for (var i = 0; i < array.length; i++) {
    arrayTemp[i] = array[i] * 2;
  }
  return arrayTemp;
}
