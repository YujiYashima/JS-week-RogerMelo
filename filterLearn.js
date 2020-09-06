//Aplicaçao que adiciona em um array os numero maiores que 37

const randomNumbers = [36, 99, 37, 63];

//O Filter recebe uma funçao como argumento, dentro dessa funçao existem 3 parametros
    //ITEM ---> O proprio item (obrigatorio)
    //INDEX ---> A posiçao do item
    //ARRAY ---> O proprio array
//O Filter retorna algo (pode ser um bloco de comando ou simplesmente um comando)

//O filter trabalha com true e false em determinadas condiçoes
    //Se for true, adiciona tal valor no array
    //Se for false, pula para o proximo valor
    //Se todos forem false, o array é retornado vazio
const numbersGreaterThan37 = randomNumbers.filter(item => item > 37);

console.log(numbersGreaterThan37)
