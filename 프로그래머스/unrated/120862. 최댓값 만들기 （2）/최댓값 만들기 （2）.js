function solution(numbers) { 
    numbers.sort((a,b) => b-a)
    const max = numbers[0] * numbers[1]
    const min = numbers[numbers.length - 1] * numbers[numbers.length - 2]
    return max > min ? max : min
}