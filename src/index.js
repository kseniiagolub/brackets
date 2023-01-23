module.exports = function check(str, bracketsConfig) {
    const identicalBrackets = ['|', '7', '8'];
    const openBrackets = ['(', '[', '{', '1', '3', '5'];
    const pairBrackets = {
        [')']: '(',
        [']']: '[',
        ['}']: '{',
        ['2']: '1',
        ['4']: '3',
        ['6']: '5',
    };
    
    let stack = [];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (identicalBrackets.includes(str[i])) {
            if (counter === 1) {
                stack.pop();
                counter = 0;
            } else {
                stack.push(str[i]);
                counter++;
            }
        } else if (openBrackets.includes(str[i])) {
            stack.push(str[i]);
        } else {
            if (stack.length === 0) {
                return false;
            }

            let topElement = stack[stack.length - 1];

            if (pairBrackets[str[i]] === topElement) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0
}
