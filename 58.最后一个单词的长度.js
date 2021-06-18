/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (34.27%)
 * Likes:    288
 * Dislikes: 0
 * Total Accepted:    165.7K
 * Total Submissions: 483.6K
 * Testcase Example:  '"Hello World"'
 *
 * 给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。
 * 
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "Hello World"
 * 输出：5
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = " "
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅有英文字母和空格 ' ' 组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let cl = 0
    let l = s.length
    let isStart = false
    for(let i=l-1; i>-1;i--){
        // console.log(s[i], i, isStart)
        if(s[i]==' '){
            if(isStart) {
                break
            }else{ 
                continue
            }
        }
        isStart = true
        cl ++
    }
    return cl
};

var lengthOfLastWord2 = function(s) {
    s = s.trim()
    let cl = 0
    let l = s.length
    for(let i=l-1; i>-1;i--){
        if(s[i]==' '){
            break
        }
        cl ++
    }
    return cl
};
// @lc code=end

// console.log(lengthOfLastWord("Today is a nice day"))
