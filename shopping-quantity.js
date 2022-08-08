const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 12 },
    { name: 'shirt', price: 2200, quantity: 15 },
    { name: 'pant', price: 3700, quantity: 11 },
    { name: 'belt', price: 600, quantity: 17 }
]
function totalQuantity(shoppings) {
    let sum = 0;
    for (let i = 0; i < shoppings.length; i++) {
        const product = shoppings[i]
        sum = sum + product.quantity
    }
    return sum
}
const quantityOfProduct = totalQuantity(shoppingCart);
console.log(quantityOfProduct)