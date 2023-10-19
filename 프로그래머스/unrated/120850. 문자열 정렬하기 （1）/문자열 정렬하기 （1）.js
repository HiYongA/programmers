function solution(my_string) {
    const array = [...my_string]
    return array.filter((str) => !isNaN(Number(str))).map((str) => Number(str)).sort((a, b) => a - b)
}