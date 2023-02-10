// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.


var isPalindrome = function (x) {
    let str = x.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
isPalindrome(-121) // false