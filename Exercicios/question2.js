//Exiba no console quantos numeros abaixo de 501 o arra possui.

const crazyNumbers = [937, 5, 385, 402, 501, 333, 502, 781, 3, 691];

const numbersLessThan501 = crazyNumbers.reduce((accumulator, crazyNumber) => {

    return crazyNumber < 501 ? ++accumulator : accumulator; //Operador ternario (ifelse em uma unica linha)

    // if (crazyNumber < 501) {

    //     accumulator++;

    // }

    // return accumulator;

}, 0);

console.log(numbersLessThan501)