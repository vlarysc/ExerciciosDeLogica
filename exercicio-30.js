var arr = new Array(23, 1, 4, 5, 88, 132, 44, 7);

var output = document.querySelector("#output");

function newArray(arr) {
  var nArr = new Array();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      nArr.push(arr[i]);
    }
  }
  return nArr;
}
/* console.log(newArray(arr));
 */

var res = newArray(arr);

function somaArr(res) {
  var resultado = 0;
  for (var i = 0; i < res.length; i++) {
    resultado += res[i];
  }
  return resultado;
}
output.innerHTML = somaArr(res);
console.log(somaArr(res));
//criar umma função
//criar novo array
//criar um for
//se for par ele dá um push pro novo array
// return  novo array então a função será o novo array com os números pares.
// criar uma nova função
//fazer um for para somar os valores do array
