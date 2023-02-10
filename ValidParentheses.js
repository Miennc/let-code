// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()"
// Output: true


function  isValid(s) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            let last = stack.pop();
            if (s[i] !== map[last]) return false;
        }
    }
    if (stack.length !== 0) return false;
    return true;
}
isValid("()[]{}") // true






//  explantion of the code
// 1. create a stack to store the open brackets
// 2. create a map to store the open brackets and their corresponding closing brackets
// 3. loop through the string
// 4. if the current character is an open bracket, push it to the stack
// 5. if the current character is a closing bracket, pop the last element from the stack and compare it to the current character
// 6. if the current character is not the corresponding closing bracket, return false
// 7. if the stack is not empty, return false
// 8. return true

