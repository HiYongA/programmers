function solution(box, n) {
    const maxCubesInBox = Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
    return maxCubesInBox;
}

// 다른 사람풀이
function solution(box, n) {
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);

}