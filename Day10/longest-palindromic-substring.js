/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     if (s.length < 2) return s;

    let start = 0;
    let end = 0;

    const expand = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        return r - l - 1;
    };

    for (let i = 0; i < s.length; i++) {
        let len1 = expand(i, i);
        let len2 = expand(i, i + 1);

        let maxLen = Math.max(len1, len2);

        if (maxLen > end - start + 1) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }

    return s.substring(start, end + 1);
};
