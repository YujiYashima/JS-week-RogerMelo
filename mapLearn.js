//Aplicaçao que multiplica todos os itens do array por 2

//Array 
const numbers = [1, 2, 3]; 

//O Map recebe uma funçao como argumento, dentro dessa funçao existem 3 parametros
    //ITEM ---> O proprio item (obrigatorio)
    //INDEX ---> A posiçao do item
    //ARRAY ---> O proprio array
//O Map retorna algo (pode ser um bloco de comando ou simplesmente um comando)
const doubleNumbers = numbers.map(item => item * 2); //Faz operaçoes com todos os valores

console.log(doubleNumbers, numbers);

//O Map executa algo para cada argumento do array