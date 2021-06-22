/**
 * 思路: 
 * 前缀矩阵公式: 取当前坐标x轴加总，即前缀和矩阵的对应坐标的上一位; 取当前坐标y轴加总，
 * 即前缀和矩阵对应坐标的左一位; 观察可发现，左上对角的位置加了两次，所以减去左上对象。
 * 最后加上矩阵当前坐标点，即得到前缀和矩阵对应坐标点的值
 * s[i][j] = (i∑x=1)(j∑y=1)A[x][y] = s[i-1][j]+s[i][j-1]-s[i-1][j-1]+A[i][j]
 * 
 * 子矩阵和: 以(p,q)为左上角、(i,j)为右下角的子矩阵的和
 * sum(p,q,i,j) = (i∑x=p)(j∑y=q)A[x][y] = s[i][j] - s[i][q-1] - s[p-1][j] + s[p-1][q-1]
*/

var NumMatrix = function(matrix) {
    // 先构建一个二维sum矩阵
    this.sum = new Array(matrix.length)
    for(let i=0; i<matrix.length; i++){
        this.sum[i] = new Array(matrix[0].length).fill(0)
    }
    // 求矩阵前缀和，代入公式
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++) {
            this.sum[i][j] = this.getSumData(i-1, j)+this.getSumData(i, j-1)-this.getSumData(i-1, j-1) + matrix[i][j]
        }
    }
}

NumMatrix.prototype.sumRegion = function(p,q,i,j) {
    // 求子矩阵和 - 直接代入公式
    return this.getSumData(i,j) - this.getSumData(i,q-1) - this.getSumData(p-1, j) + this.getSumData(p-1, q-1)
}

// 获取二维sum矩阵坐标值
NumMatrix.prototype.getSumData = function(i, j) {
    if(i>=0 && j>=0) return this.sum[i][j]
    return 0
}