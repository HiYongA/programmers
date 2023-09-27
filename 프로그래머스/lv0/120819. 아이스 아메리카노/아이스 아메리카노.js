function solution(money) {
    const iceAmericanoPrice = 5500;
    const quotient = Math.floor(money/iceAmericanoPrice)
    const remainder = money%iceAmericanoPrice
    return [quotient,remainder ]
}