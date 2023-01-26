// https://www.interviewcake.com/question/javascript/reverse-words?course=fc1§ion=array-and-string-manipulation


function reverseWords(message) {
    // Decode the message by reversing the words
    if (message.length <= 1) return message;
    reverseLetters(message, 0, message.length - 1);
    let startIndex = 0;
    
    for (let i = 0; i <= message.length; i++) {
      if(i === message.length || message[i] === ' ') {
        reverseLetters(message, startIndex, i - 1);
        startIndex = i + 1;
      }
    }
  }
  
  function reverseLetters(message, startingIndex, lastIndex) {
    while (startingIndex < lastIndex) {
      let tmp = message[startingIndex];
      message[startingIndex] = message[lastIndex];
      message[lastIndex] = tmp;
      
      startingIndex++;
      lastIndex--;
    }
  }

  /*
Time Complexity - O(n)
Space complexity - O(1)
*/

/* ---------------------------------------------------------------------------- */

const testCases = [
	['vault', 'vault'],
	['', ''],
	['thief cake', 'cake thief'],
	[
		'cake down upside pineapple eat to want I',
		'I want to eat pineapple upside down cake',
	],
]

for (const test of testCases) {
	const arr = test[0].split('')
	reverseWords(arr)
	console.log(arr.join('') === test[1])
}