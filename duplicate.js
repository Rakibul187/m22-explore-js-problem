// finding unique name 
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul']

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name)
        }
    }
    return unique
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames)

// finding duplicate product 

function findDuplicateProduct(products) {
    const uniqueProducts = [];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (uniqueProducts.includes(product) === false) {
            uniqueProducts.push(product)
        }
    }
    return uniqueProducts
}

const products = ['canacur', 'shympo', 'jhalmuri', 'singara', 'shympo', 'canacur'];
const finalProductList = findDuplicateProduct(products);
console.log(finalProductList)