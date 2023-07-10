function solution(array) {
  let answer = [];
  let arr = [...array];
  arr.sort((a, b) => b - a);
  answer.push(arr[0], array.indexOf(arr[0]));
  return answer;
}

// [다른 사람 풀이1]
// function solution(array) {
//   var answer = [];
//   let max = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//       answer = [max, i];
//     }
//   }
//   return answer;
// }


// [다른 사람 풀이2]
// function solution(array) {
//   let max = Math.max(...array);
//   return [max, array.indexOf(max)];
// }