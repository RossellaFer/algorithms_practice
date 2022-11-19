const closeToOpen = {
    ")": "(",
    "]": "[",
    "}": "{"
}


var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        let checkedChar = s[i];
        if(closeToOpen[checkedChar]) {
            if(stack && stack[0] === closeToOpen[checkedChar]) {
                stack.shift();
            }
            else {
                return false;
            }
        }
        else {
            stack.unshift(checkedChar);
        }
    }
    if(stack.length > 0) {
        return false;
    }
    return true;
};