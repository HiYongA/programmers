function solution(array) {
  const arr = array.sort((a, b) => a - b);
  const index = Math.floor(arr.length / 2);
  return arr[index];
}