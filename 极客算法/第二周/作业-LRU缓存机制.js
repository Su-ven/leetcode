// [leedCode](https://leetcode-cn.com/problems/lru-cache/)

/**
 * 思路: 很明显是要创建一个hash缓存。利用js的map特性，map进行set的时候是根据插入顺序进行分别插入
 * 题目要求无论是get，还是set的时候，是属于使用范围，那么在set/get的时候，把map的相关属性先移除，再进行重新插入
 * 这样就可以保证最新使用的属性都是最新插入的
 * 在超出缓存量的时候把第一个给移除掉就可以了
 */

var LRUCache = function(capacity) {
    // 创建一个map结构
    this.map = new Map()
    // 最大缓存量
    this.len = capacity
    return null
};

LRUCache.prototype.get = function(key) {
    // 无值返回-1
    if(!this.map.has(key)) return -1
    // 执行更新
    this.update(key)
    return this.map.get(key)
};

LRUCache.prototype.put = function(key, value) {
    // 如果是新增状态的话，要判断下长度，如果满了，删除头一个
    if(!this.map.has(key) && this.map.size === this.len) {
        // 移除头一个
        this.remove(this.map.keys().next().value)
    }
    // 执行更新
    this.update(key, value)
    return null
};

LRUCache.prototype.remove = function(key) {
    // 从hash中删除
    this.map.delete(key)
}

// 更新操作，先从hash列表中移除，再进行重新设值，确保最新更新的key-value是在map的底部
LRUCache.prototype.update = function(key, value = this.map.get(key)) {
    this.remove(key)
    this.map.set(key, value)
}