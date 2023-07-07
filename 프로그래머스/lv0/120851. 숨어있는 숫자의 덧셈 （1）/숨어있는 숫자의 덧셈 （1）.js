function solution(my_string) {
  // Array.from() : 문자열을 배열로 변환
  return Array.from(my_string).reduce(
    (acc, cur) => (isNaN(parseInt(cur)) ? acc : acc + parseInt(cur)),
    0
  );
}

// 다른 풀이(1)
// function solution(my_string) {
// let answer = 0;
// const num = my_string.replace(/[^0-9]/g,'')

// for(let i=0; i < num.length; i++) {
// answer += parseInt(num[i])
// }
// return answer
// }

// 다른 풀이(2)
// function solution(my_string) {
//문자열에서 -> for ~ of문을 돌려보자

// let sum = 0;

// for (let x of my_string) {
// if (!isNaN(Number(x))) {
// sum += Number(x);
// }
// }

// return sum;
// }
