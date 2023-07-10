function solution(array) {
  let answer = [];
  let arr = [...array];
  arr.sort((a, b) => b - a);
  answer.push(arr[0], array.indexOf(arr[0]));
  return answer;
}