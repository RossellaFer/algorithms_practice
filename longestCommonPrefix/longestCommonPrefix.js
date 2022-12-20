var longestCommonPrefix = (strs) => {
    if(!strs.length) return;
    let prefix = '';

    // find the shortest string as the prefix cannot be longer than the word
    // using the spread operator to apply the map function to all elements of the strs array
    const maxPrefixLength = Math.min(...strs.map(str => str.length))
    for (let i = 0; i < maxPrefixLength; i++) {
        //using the first element of the array, so flower
        let char = strs[0][i];
        if(strs.every(str => str[i] === char)) {
            prefix += char;
        }
        else {
            break;
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))