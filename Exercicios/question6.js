//Exiba no console uma lista de nomes dos jogos do array abaixo.
//A lista deve ter a formataçao definida abaixo do array, considerando inclusive o traço e o espaçamento.
    //Dica: para quebrar a linha, use o \n

const cart = [

    {name: 'Dark Souls III', price: 95.03},
    {name: 'Shadow the of Tomb Raider', price: 101.19},
    {name: 'Sekiro: Shadows Die Twice', price: 179.99},
    {name: 'Resident Evil 2', price: 119.90},
    {name: 'Deathe Stranding', price: 149.99}

]

/* 

    - Nome 1
    - Nome 2
    - Nome 3

*/

//String vazia como segundo argumento, pois quermos um array de strings
const productList = cart.reduce((accumulator, {name}) => `${accumulator} - ${name} \n` , ''); 

console.log(productList)
