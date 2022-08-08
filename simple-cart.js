// calculate the total shoppin cost
const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3700 },
    { name: 'belt', price: 600 }
]

function totalCost(shoppingCart) {
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const product = shoppingCart[i]
        sum = sum + product.price;
    }
    return sum
}
const cost = totalCost(shoppingCart);
console.log(cost)