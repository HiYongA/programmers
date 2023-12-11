function solution(myString, pat) {
    const answer = myString.split("").map((str) => str === "A"? "B" : "A").join("");
    return answer.includes(pat) ? 1 : 0;
}