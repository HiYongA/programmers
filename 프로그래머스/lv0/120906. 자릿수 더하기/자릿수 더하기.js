function solution(n) {
  return (
    String(n)
      .split("")
      // acc => 누적값, cur => 현재 요소 0 => 초기 누적값
      .reduce((acc, cur) => acc + Number(cur), 0)
  );
}