function solution(numbers, n) {
    let result = 0
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]
        if (result > n) return result
    }
}

// 다른 풀이
// function solution(numbers, n) {
//     return numbers.reduce((acc, cur) => acc > n ? acc : acc+cur)
// }