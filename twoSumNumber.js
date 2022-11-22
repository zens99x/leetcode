var twoSum = function(nums, target) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if((nums[i] + nums[j]) === target) {
                arr.push(i);
                arr.push(j);
            }

        }

    }
    return arr;
};
let result = twoSum([2,7,11,15], 9);
console.log(result);
