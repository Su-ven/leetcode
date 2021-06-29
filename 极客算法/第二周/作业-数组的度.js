// [leedcode](https://leetcode-cn.com/problems/degree-of-an-array/)

/**
 * 
 * 思路: 
 * 根据题意，主要是需要求取数组的最大众数，即是“度”。
 * 再取子数组中，包含同样最大众数的子数组，输出其长度最小的子数组的长度
 * 几个关键点，求众数，判断最大众数，取子数组最小长度
 * 对于数组元素，当最后相同元素的下标，减去第一次出现的元素下标，+1，得出值即为子数组长度。
 * 取其最小即可
 */

var findShortestSubArray = function(nums) {
    // 找出最大众数
    // 建立hash，记录度(计数)，第一次出现的下标，最后一次出现的下标
    let map = new Map()
    nums.forEach((item, index) => {
        if(map.has(item)){
            // 更新时只需要更新度和最后一次下标的值
            let mapItem = map.get(item)
            mapItem.count = ++mapItem.count
            mapItem.lastIndex = index
            map.set(item, mapItem)
        } else {
            // 存入的对象分别记录了度，第一次出现的下标，最后出现的下标
            map.set(item, {count: 1, firstIndex: index, lastIndex: index})
        }
    })

    let maxCount
    let minLen
    [...map.values()].forEach(item => {
        // 最大度
        if(!maxCount || item.count >= maxCount) {
            // 如果是大于的话，重置一下minLen
            if(item.count > maxCount) minLen = undefined
            maxCount = item.count
            // 最大度下计算最小长，即最后出现的下标，减去最初下标 加1 得出值最小
            let s = item.lastIndex - item.firstIndex + 1
            if(!minLen || s<=minLen) minLen = s
        }
    })
    return minLen
}