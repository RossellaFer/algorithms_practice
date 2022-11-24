var removeDuplicates = function(nums) {
    if(nums.length < 2) return nums;

    let leftIdx = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[leftIdx] = nums[i];
            leftIdx++;
        }
    }

    return leftIdx;
};

removeDuplicates([1,1,2]);