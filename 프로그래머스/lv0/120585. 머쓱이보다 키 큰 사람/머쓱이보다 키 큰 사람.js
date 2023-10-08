function solution(array, height) {
    const tall = array.filter((value) => value > height)
    return tall.length
}