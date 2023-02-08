/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const oddMedian = (arr) => {
    console.log(arr[arr.length / 2])
    return arr[Math.floor(arr.length / 2)]
}

const evenMedian = (arr) => {
    const [midPoint1, midPoint2] = [arr.length / 2 - 1, arr.length / 2]
    console.log(midPoint1, midPoint2)
    return (arr[midPoint1] + arr[midPoint2]) / 2
}

var findMedianSortedArrays = function (nums1, nums2) {
    let result = [...nums1, ...nums2]
    result = result.sort((a, b) => a - b)
    return result.length % 2 == 0 ? evenMedian(result) : oddMedian(result);
};


console.log(findMedianSortedArrays([1, 3], [2, 4]))