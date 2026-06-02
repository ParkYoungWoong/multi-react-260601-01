interface Person {
  name: string
  age: number
}

export interface User extends Person {
  // name: string
  // age: number
  isValid: boolean
  emails: string[]
}
