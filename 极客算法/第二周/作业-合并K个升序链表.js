// [leetcode](https://leetcode-cn.com/problems/merge-k-sorted-lists/)
/*
思路: 创建一个用于合并的函数，遍历需要合并的总链表数组，分别进行两两合并，合并的结果与下一个链表进行合并，直到完成
合并链表可以使用递归处理，只需要关注当前需要比对的两个结节，哪个小就返回哪个就得了
由于是链表结构，处理形式应该是返回结果挂到next上
如果有一方为null，即代表链表已走完，返回另一方剩下的节点就是了
*/
var mergeKLists = function(lists) {
    // 传入空数组的话直接返回null
    if(!lists.length) return null
    // 不足两链表无需合并，直接返回
    if(lists.length === 1) return lists[0]
    let ans = lists[0]
    // 遍历数组，分别进行两两合并，合并结果再和下一个链表合并，直到完成
    for(let i=1; i<lists.length; i++) {
        ans = merge(ans, lists[i])
    }
    return ans

    // 创建merge方法
    function merge(a, b) {
        // 边界，哪个结点先完成，返回另外一个结点
        if(a === null) return b
        if(b === null) return a
        
        // 值小的先挂到next上，然后再继续往下一节点进行比对
        if(a.val < b.val) {
            a.next = merge(a.next, b)
            return a
        } else {
            b.next = merge(a, b.next)
            return b
        }
    }
}
