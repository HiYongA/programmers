function solution(sides) {
    sides.sort((a,b) => a - b)
    // pop()메서드 : 마지막 요소를 제거하고 반환해줌
    const max = sides.pop()
    const sum = sides[0] + sides[1]
    return max < sum ? 1 : 2
}