function solution(slice, n) {
    return Math.floor((n - 1) / slice) + 1
}

// 다른 풀이 (정수로 올림)
// function solution(slice, n) {
//     return Math.ceil(n / slice)
// }