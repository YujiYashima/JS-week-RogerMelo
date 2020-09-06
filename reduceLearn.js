//Aplicaçao que soma os numero do Array

const numbers = [1, 2, 3];

//O reduce tranforma um array em outro tipo de dado:
    //Array
    //Objeto literal
    //String
    //Number

//O parametro accumulator recebe o 0
//O item recebe o primeiro item do array
//A expressao fica acumulator + item = 1
//Esse 1 é alocado no accumulator
//Volta a repetir o ciclo com 2 e 3
const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0);

console.log(sumResult)