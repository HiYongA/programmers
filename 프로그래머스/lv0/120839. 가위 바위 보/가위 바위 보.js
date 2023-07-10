function solution(rsp) {
  let answer = "";
  for (const i of rsp) {
    if (i == "2") {
      answer += "0";
    } else if (i == "0") {
      answer += "5";
    } else if (i == "5") {
      answer += "2";
    }
  }
  return answer;
}