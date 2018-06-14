/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let length = s.length;
  let max = 0;
  let sub = '';

  if (length <= 1) {
    return length;
  }

  for (let i = 0, j; i < length; i++) {
    for (j = i; j < length; j++) {
      if (sub.indexOf(s[j]) < 0) {
        sub += s[j];
      } else {
        max = Math.max(sub.length, max);
        sub = '';
        break;
      }
    }
  }

  return max;
};
