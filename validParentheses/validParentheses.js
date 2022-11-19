const referenceChart = {
    "(": ")",
    "[": "]",
    "{": "}"
}

const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value)
}


var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        let checkedChar = s[i];
        if(referenceChart[checkedChar]) {
            stack.unshift(checkedChar)
        }
        else {
            const key = getKeyByValue(referenceChart, checkedChar);
            if(stack[0] === key) {
               stack.shift();
            }
            else {
                return false;
            }
        }
    }
    if(stack.length > 0) {
        return false;
    }
    return true;
};