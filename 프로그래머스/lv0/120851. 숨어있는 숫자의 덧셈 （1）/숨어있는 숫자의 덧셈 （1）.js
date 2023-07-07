function solution(my_string) {
  // Array.from() : 문자열을 배열로 변환
  return Array.from(my_string).reduce(
    (acc, cur) => (isNaN(parseInt(cur)) ? acc : acc + parseInt(cur)),
    0
  );
}