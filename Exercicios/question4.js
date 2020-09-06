//Utilizando o array abaixo, gere um novo array com apenas os filmes lançados antes de 2000.
//Exiba este novo array.

const tarantinoMovies = [

    {name: 'Bastardos Inglorios', release: 2009},
    {name: 'Pulp Fiction', release: 1994},
    {name: 'Kill Bill: vol 2', release: 2004},
    {name: 'Quatro quartos', release: 1995},
    {name: 'Sin City', release: 2005},
    {name: 'Era uma vez em... HollyWood', release: 2019},
    {name: 'Django Livre', release: 2012},
    {name: 'Caes de Aluguel', release: 1992},
    {name: 'A prova de Morte', release: 2007},
    {name: 'Kill Bill: vol 1', release: 2003},

]

const moviesBefore2000 = tarantinoMovies.filter(({release}) => release < 2000);

console.log(moviesBefore2000)