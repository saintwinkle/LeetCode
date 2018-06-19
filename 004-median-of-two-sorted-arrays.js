/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const median = (m + n) / 2;
  const nums3 = nums1.concat(nums2).sort((a, b) => a - b);

  return (m + n) % 2 === 0 && median !== 0
          ? (nums3[median - 1] + nums3[median]) / 2
          : (nums3[Math.floor(median)] || 0);
};
