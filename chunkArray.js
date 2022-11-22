//Input: [1,2,3,4,5,6,7,8,9,10], 3
//Output: [[1,2,3],[4,5,6],[7,8,9],[10]]

function chunkElement(arr, target) {
    if (target > arr.length) return [];
    if (target < 1) return [];
    let test = [];
    for (let i = 0; i < arr.length; i+= target) {
        let result = arr.slice(i, i + target);
        test.push(result);
    }
    return test;
}
console.log(chunkElement([1,2,3,4,5,6,7,8,9,10], 11));

