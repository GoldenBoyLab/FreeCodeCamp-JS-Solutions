function multiplyAll(arr){
  var product = 1;
  
  for (var i = 0; i < arr.lenght; i++){
    for (var j = 0; j < arr[i].lenght; j++) {
      product *= arr [i][j];
    }
  }
  
  return product;
}

var product = multiplyAll([[1,2], [3,4], ,[5,6,7]]);

console.log(product);