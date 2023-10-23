function solution(num, k) {
    const numStr = num.toString()
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === k.toString()) return i + 1
    }
    return -1
}