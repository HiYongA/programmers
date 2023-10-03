function solution(my_string) {
    const vowels = "aeiou"
     for (const vowel of vowels) {
        my_string = my_string.split(vowel).join("")
    }
    return my_string;
}

// function solution(my_string) {
//     // 'i': 대소문자 구분하지 않고 찾아줌
//     // 'g': 문자열 내의 모든 해당 패턴을 찾아줌
//     return my_string.replace(/[aeiou]/ig, "");
// }