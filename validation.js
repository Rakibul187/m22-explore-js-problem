function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please enter a number!!'
    }
    return num1 + num2;
}
const result = add(12, 79);
console.log(result)