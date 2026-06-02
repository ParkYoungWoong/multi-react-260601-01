const abc: number = 123
// 선언키워드 변수이름 = 초깃값 // JS
// 선언키워드 변수이름: 타입 = 초깃값 // TS

console.log(abc)

// function xyz(abc: number) {
//   return abc
// }

interface User {
  name: string
  age: number
  isValid?: boolean
  emails?: string[]
}
const userA: User = {
  name: 'HEROPY',
  age: 85,
  emails: ['abc@gmail.com', 'def@gmail.com']
}
const userB: User = {
  name: '123',
  age: 123,
  isValid: false
}

console.log(userA, userB)

interface Movie {
  title: string
}

const numbers: Movie[] = []

console.log(numbers)
