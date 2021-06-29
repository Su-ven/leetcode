// [leetcode](https://leetcode-cn.com/problems/subdomain-visit-count/)

/**
 * 思路: 利用hash进行值存储比对即可
 * 利用域名的特点，分离出子域名，父级域名，顶层域名，并对应的访问值组合成key-value分别存入hash
 * 每次存入前先判断有没有存在对应key，如果有，则进行value加总
 * 最后组装成题目要求的数据格式
*/

var subdomainVisits = function(cpdomains) {
    // 建立map
    let map = new Map()
    cpdomains.forEach(item => {
        // 拆分数字和域名 
        let [count, addr] = item.split(' ')
        // 拆分子父顶级域名
        let spAddr = addr.split('.')
        let child, father, top
        // 根据域名的定义，以.为边界进行拆分，得出结果为三个长度的含有子域名，两个长度含有父域名，永远含有顶级域名
        switch(spAddr.length){
            case 2:
                father = addr
                top = spAddr[1]
                break
            case 3:
                child = addr
                father = `${spAddr[1]}.${spAddr[2]}`
                top = spAddr[2]
                break
        }
        // 分别进行各级域名设置map
        child && setMap(child, count, map)
        father && setMap(father, count, map)
        top && setMap(top, count, map)
    })
    let ans = []
    // 组装输出格式
    map.forEach((value, key) => {
        ans.push(`${value} ${key}`)
    })
    return ans
};

// 设置map, 如果map中含有当前key，把值相加，否则进行插入
function setMap(key, count, map) {
    count = Number(count)
    if(map.has(key)){
        let value = map.get(key)
        map.set(key, value + count)
    } else {
        map.set(key, count)
    }
}