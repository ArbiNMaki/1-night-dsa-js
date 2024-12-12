/**
 * input = [2,7,11,15], target = 9, output = [0,1]
 * input = [2,7,11,15], target = 22, output = [1,3]
 */

// Ugly Code
function twoSum(nums, target) {
    // Loop through each number in the list
    for (let i = 0; i < nums.length; i++) {
        // For each number, check the rest of the list
        for (let j = i + 1; j < nums.length; j++) {
            // If the current number and the one we're checking add up to the target, return their indexes
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }

    return [];
}

const res = twoSum([2,7,11,15], 9);
const res2 = twoSum([2,7,11,15], 22);
console.log(res);
console.log(res2);
