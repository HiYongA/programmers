function solution(my_string, index_list) {
    let answer =  ""
    for (const index of index_list) {
        answer += my_string[index]
    }
    return answer
}


// 다른 풀이
// function solution(my_string, index_list) {
//     return index_list.map(i => my_string[i]).join('')
// }