function solution(age) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const ages = age.toString().split("");
  let answer = "";
  for (let i = 0; i < ages.length; i++) {
    answer += alphabet[ages[i]];
  }
  return answer;
}