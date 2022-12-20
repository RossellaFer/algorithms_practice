var maximumValue = function(strs) {
    let max = null;
    for (let i = 0; i < strs.length; i++) {
        let currentStr = strs[i];
        let strValue = /^\d+$/.test(currentStr) ? Number(currentStr) : currentStr.length;
        if(strValue > max) {
            max = strValue;
        }
    }
    return max;
};

console.log(maximumValue(["alic3","bob","3","4","00000"]))