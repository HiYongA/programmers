function solution(angle) {
    let answer;
    switch (true) {
        case 0 < angle && angle < 90:
            answer = 1
            break
        case angle === 90:
            answer = 2
            break
        case 90 < angle && angle < 180:
            answer = 3
            break
        case angle === 180:
            answer = 4
            break
            
    }
    return answer
}