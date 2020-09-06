//Gere um novo array que contem apenas os nomes das series abaixo.
//Exiba um um console.

const tvShows = [

    {name: 'Breaking Bad', releaseYear: 2008},
    {name: 'Mr. Robot', releaseYear: 2015},
    {name: 'True Detective', releaseYear: 2014},
    {name: 'Hannibal', releaseYear: 2013},
    {name: 'The Handmainds Tale', releaseYear: 2017},
    {name: 'House M.D.', releaseYear: 2004},
    {name: 'Watchmen', releaseYear: 2019},
    {name: 'Arrow', releaseYear: 2010},
    {name: 'Black Mirror', releaseYear: 2014}

]

const showNames = tvShows.map(({name}) => name); //Substituir tvShow por ({name}) e tvShow.name por name

console.log(showNames);