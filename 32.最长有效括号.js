/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (34.66%)
 * Likes:    1216
 * Dislikes: 0
 * Total Accepted:    133.7K
 * Total Submissions: 385.6K
 * Testcase Example:  '"(()"'
 *
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "(()"
 * 输出：2
 * 解释：最长有效括号子串是 "()"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = ")()())"
 * 输出：4
 * 解释：最长有效括号子串是 "()()"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = ""
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * s[i] 为 '(' 或 ')'
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let arr = []
    let max = 0
    let long = 0
    for(let c of s){
        if(c==')'){
            let pc = arr.pop()
            if(pc=='('){
                long+=2
            }else{
                long = 0
            }
            max = long > max?long:max
            console.log('----', c, pc, long, arr)
        }else{
            console.log('+++++', c)
            arr.push(c)
        }
    }
    return max
};
// @lc code=end


// console.log(longestValidParentheses(')()())'))
console.log(longestValidParentheses('()(()'))
