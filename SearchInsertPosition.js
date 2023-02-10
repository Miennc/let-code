// Search Insert Position
// https://leetcode.com/problems/search-insert-position/


function searchInsert(nums, target) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] > target) {
            return i;
        }
        i++;
    }
    return i;
}
