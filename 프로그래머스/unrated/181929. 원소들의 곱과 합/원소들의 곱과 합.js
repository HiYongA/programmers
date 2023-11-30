function solution(num_list) {
    const add = num_list.reduce((a, b) => a + b)
    const mul = num_list.reduce((a, b) => a * b)
    return add * add > mul ? 1 : 0
}