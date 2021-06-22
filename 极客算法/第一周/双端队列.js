// leetcode: https://leetcode-cn.com/problems/design-circular-deque/
/**
 * 思路：队列可以使用js语法中的数据替代
 * 实质上就是对于数据方法的push,pop,unshift,shift这种方法的实现
 * insertFront: 尾部遍历，使原元素下标移到下标+1，最后在顶部加入传入的值
 * insertLast： 直接尾部下标添加既是
 * deleteFront, deleteLast 创建一个新的缓存数组用于接收结果数组
*/

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
    this.quene=[]
    this.limit=k
    this.len=0
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.len>=this.limit) return false
    for(let i=this.len-1;i>=0;i--){
        this.quene[i+1] = this.quene[i]
    }
    this.quene[0] = value
    this.len++
    return true
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.len>=this.limit) return false
    this.quene[this.len]=value
    this.len++
    return true
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.len === 0) return false
    let res = new Array(this.len-1)
    for(let i=1;i<this.len;i++){
        res[i-1] = this.quene[i]
    }
    this.quene = res
    this.len--
    return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.len === 0) return false
    this.len--
    let res = new Array(this.len)
    for(let i=0;i<this.len;i++){
        res[i]=this.quene[i]
    }
    this.quene=res
    return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.len===0) return -1
    return this.quene[0]
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.len===0) return -1
    return this.quene[this.len-1]
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.len === 0
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.len === this.limit
};