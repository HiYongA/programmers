function solution(myString) {
    // 정규표현식인 /a/g는 모든 "a"를 전역으로 검색하고 "a"=> "A"로 바꿔준다.
  return myString.toLowerCase().replace(/a/g, "A"); 
}

// 다른 풀이
// const solution = (myString) => {
// myString을 전부 소문자로 변환 후 myString의 모든 a를 A로 바꿔주고 return
//  return myString.toLowerCase().replaceAll("a", "A")
// }