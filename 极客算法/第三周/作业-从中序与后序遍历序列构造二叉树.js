// [leedCode](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

/**
 * 思路: 后序遍历是左右根，最后一位即是根
 * 中序根据得出来的根可以拆分左右两个子列表（左右树）
 * 中序和后序的长度永远相同，拆分子列表后的中序和后序的长度也应该相同
 * 可以根据拆分出来的中序子列长度拆分后序列表
 * 递归重复前面的步骤
 */

 var buildTree = function(inorder, postorder) {
    let tree = createTree(inorder, postorder)
    return tree

    function createTree(inorder, postorder) {
        // 边界, 如果没有是空节点，可以返回null，只有一个节点那没有比对的必要，直接返回节点
        if(!inorder.length) return null
        if(inorder.length === 1) return new TreeNode(inorder[0])

        // 后序的最后一位就是根
        let rootValue = postorder.pop()

        // 获取左右树的下标
        let middleIndex = inorder.findIndex(item => item === rootValue)
        // 左右树的中序
        let leftInorder = []
        let rightInorder = []
        // 拆分左右树
        inorder.forEach((item, index) => {
            if(index < middleIndex) leftInorder.push(item)
            if(index > middleIndex) rightInorder.push(item)
        })

        // 拆分左右树的后序
        let rightPostorder = postorder.splice(leftInorder.length)
        let leftPostorder = postorder

        let root = new TreeNode(rootValue)
        // 左树
        root.left = createTree(leftInorder, leftPostorder)
        // 右树
        root.right = createTree(rightInorder, rightPostorder)

        return root
    }
};