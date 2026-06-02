// class Person {
//   constructor() {}
// }
// const person: Person = new Person()

// const a: number = 123

const user = {
  name: 'HEROPY',
  age: 85,
  isValid: true,
  emails: []
}

const { age, ...xyz } = user

console.log(age) // 85
console.log(xyz) // { name: 'HEROPY', isValid: true, emails: [] }
