function solution(n) {
  // 에라토스테네스의 체를 위한 배열 초기화
  const isPrime = new Array(n + 1).fill(true);
  
  // 0과 1은 소수가 아니므로 false로 설정
  isPrime[0] = false;
  isPrime[1] = false;
  
  // 2부터 n까지의 숫자에 대해 소수를 찾음
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      // i의 배수들을 모두 소수가 아닌 것으로 표시
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  
  // true로 남아 있는 요소의 개수를 세서 소수의 개수 반환
  return isPrime.filter((value) => value === true).length;
}