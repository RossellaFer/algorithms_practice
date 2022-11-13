var isPalindrome = function(x) {
    const numArray = x.toString();
    const reversed = reverseString(numArray);
    return numArray === reversed;
  };
  
  var reverseString = function(str) {
    const strArray = str.split('');
    let start = 0;
    let end = strArray.length - 1;
      
    while(start <= end) {
      let temp = strArray[start];
      strArray[start] = strArray[end];
      strArray[end] = temp;
      start++;
      end--;
    }
    return strArray.join('');
  }

console.log(isPalindrome(121));
