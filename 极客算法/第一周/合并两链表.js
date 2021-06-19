/**
 * 合并两个链表
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/submissions/
 * 语言: JavaScript
 * 
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