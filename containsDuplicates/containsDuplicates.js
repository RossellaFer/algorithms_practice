var containsDuplicate = function(nums) {
    const encounteredNums = {};
    
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if(encounteredNums[n] !== undefined) {
           return true;
        }
        encounteredNums[n] = i;
    }
    return false;
};
