/**
 * 加一
 * https://leetcode-cn.com/problems/plus-one/submissions/
*/

/**
 * 思路: 从尾部开始遍历，如果当前元素为9，则赋值为0，继续遍历
 * 直到当前元素不为9，当前元素+1，跳出遍历
 * 如果遍历完成，digits第一位为0，则说明原数组第一位为9，就在头部补加一个1
*/
 var plusOne = function(digits) {
    let stack = []
    let index = null
    for(let i=digits.length-1; i>=0; i--){
        if(digits[i] === 9){
            digits[i] = 0
            continue
        }
        digits[i] = digits[i]+1
        break
    }
    if(digits[0] === 0) {
        digits.unshift(1)
    }
    return digits
};

// ---------------------------------------------------------------------------------------------------------

