const users = [

    {name: 'Pedro', premium: true},
    {name: 'Lorena', premium: false},
    {name: 'Laura', premium: true},
    {name: 'Bernardo', premium: false},
    {name: 'Bento', premium: true}

]

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers)