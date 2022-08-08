// find max number from array 
function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        let number = numbers[index];
        if (number > largest) {
            largest = number;
        }
    }
    return largest
}
const numbers = [11, 33, 66, 99, 55, 88, 23, 788, 999];
const result = maxInArray(numbers)
console.log('max number is', result)

// find min number from array 
function findMin(numbers2) {
    let min = numbers2[0]
    for (let i = 0; i < numbers2.length; i++) {
        const number2 = numbers2[i];
        if (number2 < min) {
            min = number2
        }
    }
    return min
}
const numbers2 = [16, 38, 58, 33, 66, 99, 22, 5];
const result2 = findMin(numbers2);
console.log('min number is', result2)