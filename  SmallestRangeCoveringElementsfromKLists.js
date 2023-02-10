// You have k lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the k lists.
// https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/
// We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c.
// Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
// Output: [20,24]


// smallestRange([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]);
// Expected: [20,24]
// code lai cho dung

function smallestRange(nums) {
    let result = [];
    let min = Infinity;
    let max = -Infinity;
    let maxIndex = 0;
    let minIndex = 0;
    let minRange = Infinity;
    let maxRange = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i][0] > max) {
            max = nums[i][0];
            maxIndex = i;
        }
        if (nums[i][0] < min) {
            min = nums[i][0];
            minIndex = i;
        }
    }
    minRange = min;
    maxRange = max;
    while (minIndex !== maxIndex) {
        if (nums[minIndex][0] < nums[maxIndex][0]) {
            nums[minIndex].shift();
            min = nums[minIndex][0];
            minIndex = minIndex;
        } else {
            nums[maxIndex].shift();
            max = nums[maxIndex][0];
            maxIndex = maxIndex;
        }
        if (max - min < maxRange - minRange) {
            minRange = min;
            maxRange = max;
        }
    }
    result.push(minRange, maxRange);
    return result;
}


