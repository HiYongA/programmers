function solution(box, n) {
    const maxCubesInBox = Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
    return maxCubesInBox;
}