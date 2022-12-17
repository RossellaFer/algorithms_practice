var moveZeroesOptimized = function(nums) {
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            let tmp = nums[i];
            nums[i] = nums[left];
            nums[left] = tmp;
            left++;
        }
    }
    return nums;
}

console.log(moveZeroesOptimized([0,1,0,3,12]));