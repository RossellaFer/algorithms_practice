var longestCommonPrefix = (strs) => {
    if(!strs.length) return;
    let prefix = '';

    // find the shortest string as the prefix cannot be longer than the word
    const maxPrefixLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < maxPrefixLength; i++) {
        let char = strs[0][i];
        if(strs.every(str => str[i] === char)) {
            prefix += str[i];
        }
        else {
            break;
        }
    }
    return prefix;
}

longestCommonPrefix(["flower","flow","flight"])