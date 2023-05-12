function multiplyAll(arr) {
    var product = 1; // inicializa a variável product 

    for (var i = 0; i < arr.length; i++) { //roda o array
        for (var j = 0; j < arr[i].length; j++) { // roda dentro do array
            product *= arr[i][j]; //multiplica e incrementa por 1, os valores dentro dos arrays internos
        }
    }
    return product; //retona o valor incrementado à função, para que possa ser obtido chamando a função
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6]]); // assinala o valor da execução da função ao product
console.log (product); // mostra no console (product)