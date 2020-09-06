//Aplicaçao que reduz o preço dos produtos maiores que R$ 30 pela metade.

const products = [

    {name: 'Mouse sem Fio', price: 30},
    {name: 'Pen Drive', price: 25},
    {name: 'Cartucho de Tinta', price: 50},
    {name: 'Suporte Ergometrico para Notebook', price: 23},
    {name: 'Repetirdor de WI-FI', price: 44}

]

const saleProducts = products.map(product => {

    if (product.price >= 30) {

        return { name: product.name, price: product.price / 2 }
        
    }

    return product; //Sempre deve retornar um valor, passando ou nao pela condiçao
})

console.log(products);
console.log(saleProducts);