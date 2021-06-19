
/**
 * 合并两个链表
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/submissions/
 * 语言: JavaScript
 * 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * 思路: 创建一个结果链表，用于接收两个链表的比对结果 
 * 当两个链表都没走完的话，判断两个节点，小的话往结果链表里塞，值小的链表走到下一个结点继续
 * 当其中一方链表走完后，如果还有剩余，那把剩余加到结果链表上去
 * 返回结果链表头
*/
var mergeTwoLists = function(l1, l2) {
    let res = new ListNode()
    let head = res
    while(l1&&l2){
        if(l1.val <= l2.val){
            res.next = l1
            l1 = l1.next
        } else {
            res.next = l2
            l2 = l2.next
        }
        res = res.next
    }
    if(l1) res.next = l1
    if(l2) res.next = l2
    return head.next
}

// ---------------------------------------------------------------------------------------------------------

/**
 * 加一
 * https://leetcode-cn.com/problems/plus-one/submissions/
*/
/**
 * @param {number[]} digits
 * @return {number[]}
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

