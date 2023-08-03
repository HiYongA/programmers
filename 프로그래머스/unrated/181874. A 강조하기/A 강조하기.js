function solution(myString) {
    // 정규표현식인 /a/g는 모든 "a"를 전역으로 검색하고 "a"=> "A"로 바꿔준다.
  return myString.toLowerCase().replace(/a/g, "A"); 
}