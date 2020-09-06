// Gere um novo array com apenas os numeros impares do array abaixo e exiba.

const randomNumbers = [10, 30, 15, 25, 50, 40, 5];

const imparNumbers = randomNumbers.filter(item => item % 2 != 0);

console.log(imparNumbers);