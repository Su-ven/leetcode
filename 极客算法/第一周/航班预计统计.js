// leetcode: https://leetcode-cn.com/problems/corporate-flight-bookings/

var corpFlightBookings = function(bookings, n) {
    // 差分思想
    // 一段受影响的范围，从l处开始，r+1处消失
    // 求差分数组
    let colcArr = new Array(n).fill(0)
    for(let i=0; i<bookings.length; i++){
        // l处加
        colcArr[bookings[i][0]-1] += bookings[i][2]
        // r+1处减
        if(bookings[i][1]-1+1 < colcArr.length){
            colcArr[bookings[i][1]-1+1] -= bookings[i][2]
        }
    }
    // 数组前补0
    colcArr.unshift(0)
    // 求差分数组前缀和
    let sum = new Array(colcArr.length).fill(0)
    for(let i=1; i<sum.length; i++){
        sum[i] = sum[i-1] + colcArr[i]
    }
    // 去除头
    sum.shift()
    return sum
};