function solution(n, control) {
    for (let i = 0; i < control.length; i++) {
        n += control[i] === "w" ? 1 :
             control[i] === "s" ? -1 :
             control[i] === "d" ? 10 :
             control[i] === "a" ? -10 : 0
    }
    return n
}