/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Always use nums1 as the smaller array
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;

    let left = 0;
    let right = m;

    while (left <= right) {
        let partition1 = Math.floor((left + right) / 2);
        let partition2 = Math.floor((m + n + 1) / 2) - partition1;

        let left1 = partition1 === 0
            ? -Infinity
            : nums1[partition1 - 1];

        let right1 = partition1 === m
            ? Infinity
            : nums1[partition1];

        let left2 = partition2 === 0
            ? -Infinity
            : nums2[partition2 - 1];

        let right2 = partition2 === n
            ? Infinity
            : nums2[partition2];

        // Correct partition
        if (left1 <= right2 && left2 <= right1) {

            // Odd total length
            if ((m + n) % 2 === 1) {
                return Math.max(left1, left2);
            }

            // Even total length
            return (
                Math.max(left1, left2) +
                Math.min(right1, right2)
            ) / 2;
        }

        // Move left
        if (left1 > right2) {
            right = partition1 - 1;
        } else {
            // Move right
            left = partition1 + 1;
        }
    }
};
