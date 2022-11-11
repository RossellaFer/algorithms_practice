var twoSum = function(nums, target) {
    // the purpose of the object is to store the numbers we have seen and the indexes they appear at
    const seenNums = {};
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        // amount needed to add to the current number to get to the target
        // if the number has already been added to the object, return its index (saved in the object) and the current index
        if(seenNums[target - n] !== undefined) {
            return [seenNums[target - n], i]
        } 
        // if the number has not been seen yet, add it to the object
        seenNums[n] = i;
    }
    return [];
};

twoSum([2,7,11,15], 9)