//Uma aplicaçao que calcula a soma de todos os pontos de cada jogador

const phaseScores = [

    {name: 'Pedro', score: 337},
    {name: 'Lorena', score: 43},
    {name: 'Julia', score: 234},
    {name: 'Paulo', score: 261},
    {name: 'Matheus', score: 491},
    {name: 'Pedro', score: 167},
    {name: 'Lorena', score: 137},
    {name: 'Julia', score: 135},
    {name: 'Paulo', score: 359},
    {name: 'Matheus', score: 133}

]

const pedroScore = phaseScores.reduce((accumulator, phaseScore) => {

    if (phaseScore.name === "Pedro") {

        accumulator += phaseScore.score;
        
    }

    return accumulator;

}, 0);

console.log(pedroScore)