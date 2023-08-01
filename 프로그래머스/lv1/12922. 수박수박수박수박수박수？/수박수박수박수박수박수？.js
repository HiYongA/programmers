function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}

// 다른 풀이
// repeat(): 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환하는 메서드
// 짝수인 경우에는 "수박".repeat(n/2)로 반복한 "수박"패턴이 반환되고, 홀수인 경우에는 "수박".repeat(n/2)+"수"로 "수박수"패턴이 반환된다.
// function solution(n) {
//   return "수박".repeat(n / 2) + (n % 2 === 0 ? "" : "수");
// }

// 다른 풀이2
// const solution(n) {
//     return "수박".repeat(n).slice(0,n)
// }

// 다른 풀이3
// const solution = (n: number): string => {
//   const a = '수';
//   const b = '박';
//   const temp: Array<string> = [];
//   // n이 짝수일 때,
//   if (n % 2 === 0) {
//     for (let i = 0; i < n / 2; i++) {
//       temp.push(a, b);
//     }
//   }
//   //n이 홀수일 때,
//   else if (n % 2 !== 0) {
//     for (let i = 1; i < n / 2; i++) {
//       temp.push(a, b);
//     }
//     temp.push(a);
//   }
//   return temp.join('');
// };