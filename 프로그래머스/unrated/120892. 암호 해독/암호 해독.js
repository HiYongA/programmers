function solution(cipher, code) {
    const arr = [...cipher]
    // 인덱스가 0부터 시작하기 때문에 1을 더해서 0,4,8,12가 아닌 4,8,12와 같이 배수 번째 글자가 필터링되게 함! 
    return arr.filter((item, index) => (index +1) % code === 0).join("")
}