function solution(my_string, num1, num2) {
    let array = my_string.split("");
    [array[num1], array[num2]] = [array[num2], array[num1]];
    return array.join("");
}

// function solution(my_string, num1, num2) {
//     return my_string.split('').map((str, index) => {
//         if (index === num1) return my_string[num2];
//         if (index === num2) return my_string[num1];
//         return str;
//     }).join('');
// }