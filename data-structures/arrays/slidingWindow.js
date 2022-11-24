function maxSumArr(arr, num) {
    // variables tracking sums of the consequent subset and the maximum sum compared to the temporary sum
    let maxSum = 0;
    let tempSum = 0;

    // return if the length is less than subset length
    if(arr.length < num) return null;


    // Start looping through an array from index 0 to the size of num, and add every element to the tempSum
    for(let i = 0; i < num; i++) {
       tempSum += arr[i];
    }
    // Set the tempSum to the maxSum variable, and loop through the array again starting from the num to get a new tempSum
    tempSum = maxSum;

    for(let i = num; i < arr.length; i++) {
        // The new tempSum is achieved by sliding window of the array so we can subtract the previous element of the new subset and add the new element
       tempSum = tempSum - arr[i - num] + arr[i];

       //compare between maxSum and tempSum and set bigger sum as maxSum
       maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

maxSumArr([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)