function solution(n) {
  let str = n
    .toString() // 숫자 -> 문자열
    .split("") // 문자열 -> 배열
    .sort((a, b) => b - a) // 오름차순
    .join(""); // 배열 -> 문자열

  return Number(str); // 문자열 -> 숫자
}