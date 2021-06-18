/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (33.48%)
 * Likes:    3358
 * Dislikes: 0
 * Total Accepted:    510.7K
 * Total Submissions: 1.5M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a"
 * 输出："a"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "ac"
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由数字和英文字母（大写和/或小写）组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 
    let l = s.length
    console.log('l',l)
    if(l<1){
        return l
    }
    // return 00
    let p = ''
    for(let i=0;i<l;i++){
        let p1 = isPalindrome(s, i,i+1)
        let p2 = isPalindrome(s, i-1,i+1)
        let l0 = p.length
        let l1 = p1.length
        let l2 = p2.length
        p = l1 >l2 ? (l1>l0?p1:p):(l2>l0?l2:p)
    }
    return p

    function isPalindrome(str, st,ed){
        console.log('t', st, ed)
        while(st>-1 && ed <l){
            console.log(str, st, ed)
            if(str[st]==str[ed]){
                st--
                ed++
            }else{
                break
            }
        }
        const pp = str.substring(st+1,ed-1)
        console.log('pp',pp)
        return pp
    }
};
// @lc code=end

console.log('0000000', longestPalindrome('babad'))

