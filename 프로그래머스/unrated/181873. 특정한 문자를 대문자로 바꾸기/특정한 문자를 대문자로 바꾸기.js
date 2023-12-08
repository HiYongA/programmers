function solution(my_string, alp) {
    let answer = '';
    for (let str of my_string) {
       str === alp ? answer += str.toUpperCase() : answer += str
    }
    return answer;
}