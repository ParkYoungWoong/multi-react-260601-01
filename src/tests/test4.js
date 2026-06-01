const number = [4, 10, 8, 5]
const newNumber = [7, ...number]

console.log(newNumber) // [7, 4, 10, 8, 5]

const user = {
  name: 'HEROPY',
  age: 85,
  isValid: true
}
const newUser = {
  ...user,
  isValid: false,
  emails: []
}
console.log(newUser.isValid) // false
console.log(newUser.emails) // []
console.log(newUser.age) // 85
