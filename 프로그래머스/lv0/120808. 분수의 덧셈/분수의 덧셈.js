function solution(numer1, denom1, numer2, denom2) {
    // 공통 분모 계산
    const commonDenominator = denom1 * denom2;

    // 각 분자를 공통 분모에 맞게 변환하고 더하기
    const resultNumer = numer1 * (commonDenominator / denom1) + numer2 * (commonDenominator / denom2);

    // 분자와 분모의 최대공약수 계산
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const greatestCommonDivisor = gcd(resultNumer, commonDenominator);

    // 결과를 기약 분수로 나타냄
    return [resultNumer / greatestCommonDivisor, commonDenominator / greatestCommonDivisor];
}

