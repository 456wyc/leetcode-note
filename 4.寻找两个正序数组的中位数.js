/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (39.74%)
 * Likes:    3807
 * Dislikes: 0
 * Total Accepted:    355.4K
 * Total Submissions: 894.3K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums1 = [0,0], nums2 = [0,0]
 * 输出：0.00000
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums1 = [], nums2 = [1]
 * 输出：1.00000
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：nums1 = [2], nums2 = []
 * 输出：2.00000
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m
 * nums2.length == n
 * 0 
 * 0 
 * 1 
 * -10^6 
 * 
 * 
 * 
 * 
 * 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 * 
 */


// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // (m+m)/2
    let p = (nums1.length+nums2.length)/2
    let isInt = Number.isInteger(p)
    p = parseInt(p+1)
    // console.log('p',p)
    let cur1=0, cur2 = 0
    let temp = []
    while(temp.length<p){
        let over1 = cur1>nums1.length-1
        let over2 = cur2>nums2.length-1
        if(over1){
            temp.push(nums2[cur2++])
        }else if(over2){
            temp.push(nums1[cur1++])
        }else if(nums1[cur1]<nums2[cur2]){
            temp.push(nums1[cur1++])
        }else{
            temp.push(nums2[cur2++])
        }
        // console.log('ttt', temp, cur1, cur2)
    }
    let rs = isInt ? (temp[p-1]+temp[p-2])/2 : temp[p-1]
    // console.log(temp,rs)
    return rs
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end

// findMedianSortedArrays([0,0],[0,0])
// findMedianSortedArrays([1,3],[2])
// findMedianSortedArrays([1,2],[3,4])