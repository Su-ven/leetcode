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