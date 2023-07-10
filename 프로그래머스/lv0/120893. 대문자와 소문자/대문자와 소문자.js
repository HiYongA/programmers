function solution(my_string) {
  // Array.from: 문자열 -> 배열 , 마지막에 join으로 배열 -> 문자열로 결합
  return Array.from(my_string)
    .map((i) => (i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()))
    .join("");
}

// 다른 사람 풀이
// function error(my_string) {
// let result = "";
// for (let x = 0; x < my_string.length; x++) {
// const char = my_string[x];
// if (char === char.toUpperCase()) {
// result += char.toLowerCase();
// continue;
// }
// result += char.toUpperCase();
// }

// return result;
// }