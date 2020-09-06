//Aplicaçao que divide todos os preços por 2.

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => price/2); //Usa-se 'price' no singular, pois estamos nos referindo a apenas 1 item

console.log(salePrices)