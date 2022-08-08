const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = { id: 121, classs: 11, name: 'Agun' }
const friendsAge = [13, 14, 11, 17, 21, 16, 15, 20]

console.log(typeof country);
console.log(typeof age)
console.log(typeof student)

// check array by Array.isArray 
console.log(Array.isArray(friendsAge))
console.log(Array.isArray(student))

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20))
console.log(typeof add)

// -------------------=------------------
console.log(friendsAge.includes(19))
console.log(friendsAge.includes(21))

// ------------------concat----------------------
const newFriendsAge = [70, 80, 90]
const allFriends = newFriendsAge.concat(friendsAge)
console.log(allFriends)