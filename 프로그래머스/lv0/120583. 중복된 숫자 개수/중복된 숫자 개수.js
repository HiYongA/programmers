function solution(array, n) {
  let count = 0;
  count = array.filter((num) => num === n).length;
  return count;
}