function solution(numbers, direction) {
  if (direction === "right") {
    const lastElement = numbers.pop(); // 마지막 원소 추출
    numbers.unshift(lastElement); // 첫 번째 위치에 추가
  } else if (direction === "left") {
    const firstElement = numbers.shift(); // 첫 번째 원소 추출
    numbers.push(firstElement); // 마지막 위치에 추가
  }

  return numbers;
}


// 다른 풀이
// function solution(numbers, direction) {
//     direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
//     return numbers;
// }
