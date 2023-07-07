function solution(n) {
  return (
    String(n)
      .split("")
      // acc => 누적값, cur => 현재 요소 0 => 초기 누적값
      .reduce((acc, cur) => acc + Number(cur), 0)
  );
}

// (n+ "") : 숫자를 문자열로 변환하여 연산을 수행한다.
// n이 1234일 경우, 문자열 "1234"로 반환한다.