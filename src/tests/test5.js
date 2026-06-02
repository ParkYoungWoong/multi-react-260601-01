// 일반 함수
function abc(a) {
  return a + 123
}
const def = function (a) {
  console.log(this)
  return a + 123
}

// 화살표 함수
const ghi = a => {
  console.log(this)
  return a + 123
}
const jkl = a => a + 123
