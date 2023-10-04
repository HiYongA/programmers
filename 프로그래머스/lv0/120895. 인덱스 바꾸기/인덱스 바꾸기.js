function solution(my_string, num1, num2) {
    if (my_string.length < 2 || num1 === num2) {
        return my_string;
    }
    
    const myArray = my_string.split('');
    [myArray[num1], myArray[num2]] = [myArray[num2], myArray[num1]];
    
    return myArray.join('');
}