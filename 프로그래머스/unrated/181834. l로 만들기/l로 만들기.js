function solution(myString) {
    return myString.split("").sort((a, b) => b - a).map((str) => str < "l" ? "l" : str).join("")

}