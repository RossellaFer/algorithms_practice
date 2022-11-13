var isPalindrome = function(x) {
    if (x < 0) return false;
    let reverse = 0;
    let copy = x;
    
    while(copy > 0) {
        let digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy = Math.floor(copy / 10);
    }
    
    return x === reverse;
}


console.log(isPalindrome(121));