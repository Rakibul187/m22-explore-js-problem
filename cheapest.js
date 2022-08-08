// find the cheapest price phone 
// const phones = [
//     { name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: ' blue' },
//     { name: 'vivo', camera: 12, storage: '32gb', price: 16000, color: 'water blue' },
//     { name: 'iPhone', camera: 50, storage: '132gb', price: 136000, color: 'black' },
//     { name: 'nokia', camera: 32, storage: '64gb', price: 40000, color: 'blue' },
//     { name: 'HtC', camera: 12, storage: '132gb', price: 56000, color: 'gold' }
// ]

//--------------- find the cheapest price phone ---------------
// function cheapestPhone(phones) {
//     let cheapest = phones[0]
//     for (let i = 0; i < phones.length; i++) {
//         let phone = phones[i]
//         if (phone.price < cheapest.price) {
//             cheapest = phone;
//         }
//     }
//     return cheapest
// }
// const mySelection = cheapestPhone(phones);
// console.log(mySelection)

// ----------------find the highest price phone -------------
const phones = [
    { name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: ' blue' },
    { name: 'vivo', camera: 122, storage: '32gb', price: 16000, color: 'water blue' },
    { name: 'iPhone', camera: 150, storage: '132gb', price: 136000, color: 'black' },
    { name: 'nokia', camera: 132, storage: '264gb', price: 40000, color: 'blue' },
    { name: 'HtC', camera: 222, storage: '132gb', price: 56000, color: 'gold' }
];

// function highestPricePhone(phones) {
//     let highest = phones[0]
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if (phone.price > highest.price) {
//             highest = phone
//         }
//     }
//     return highest
// }

// const mySelection2 = highestPricePhone(phones);
// console.log(mySelection2)

//------------find the highest camera phone -----------------
function highestcamera(phones) {
    let highest = phones[0]
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera > highest.camera) {
            highest = phone
        }
    }
    return highest
}
const mySelection3 = highestcamera(phones);
console.log('here is the highest camera phone ', mySelection3)