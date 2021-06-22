//   leetcode : https://leetcode-cn.com/problems/count-number-of-nice-subarrays/
/**
 * 思路: 
 * 转化想法: 把数组根据奇偶分别标识为1,0，那么题意即是求: 满足在一段范围内元素加总和为k的子数组的个数，符合前缀和的思路
 * 转化数组为奇偶标识的数组
 * 根据前缀和的求法，先转化下标，给nums头补加元素0 -> [0]+nums
 * 根据数组得出前缀和数组s
 * 子段公式 k = s[r] - s[l-1] -> s[l-1] = s[r] - k
 * s中可能存在多个符合条件的s[l-1]，那么把s中的元素进行计数，最后符合条件的都可以进行加总
 * 遍历s，代入公式，由于s的元素为0，1为基础的加总数，所以可以取s[l-1]必定大于0
 * 把符合条件的计数和进行加总，即是题目要求结果
 */
var numberOfSubarrays = function(nums, k) {
    // 输出结果
    let ans = 0
    // 转化下标
    nums = nums.map(item => item%2)
    // 数组头加0
    nums.unshift(0)
    // 前缀和数组
    let s = new Array(nums.length)
    // 前缀和数组头为0
    s[0] = 0
    // 计算前缀和
    for(let i=1; i<nums.length; i++){
        s[i] = s[i-1] + nums[i]
    }
    // 计数map
    let count = new Map()
    for(let i=0; i<s.length; i++){
        if(count.has(s[i])){
            let c = count.get(s[i])
            count.set(s[i], ++c)
        } else {
            count.set(s[i], 1)
        }
    }
    // 统计
    for(let i=0; i<s.length; i++){
        if(s[i] - k >= 0) {
            ans += count.get(s[i] - k)
        }
    }

    return ans
};