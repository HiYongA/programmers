function solution(num_list) {
    return num_list.reduce((acc, cur) => acc + (cur % 2 === 0 ? '' : cur), '') * 1 +
           num_list.reduce((acc, cur) => acc + (cur % 2 === 0 ? cur : ''), '') * 1;
}

// reduce 메서드를 사용하여 홀수와 짝수를 각각 문자열로 만들어 합을 구하고 있습니다.
// * 1을 사용하여 문자열을 숫자로 변환하고 각 합을 반환하고 있어요.

