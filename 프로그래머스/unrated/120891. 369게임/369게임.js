function solution(order) {
  const orderArr = [...order.toString()]
  const clapDigits = orderArr.filter((num) => num === '3' || num === '6' || num === '9')
  return clapDigits.length
}