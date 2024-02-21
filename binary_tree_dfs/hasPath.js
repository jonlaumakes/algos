var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.val = val;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
// does a tree have a path to a leaf where the sum of nodes in the path equal to target sum
var hasPath = function (root, targetSum) {
    // reached leaf node and the target path sum was not found
    if (root === null)
        return false;
    // happy path
    if (root.left === null && root.right === null && root.val === targetSum) {
        return true;
    }
    return hasPath(root.left, targetSum - root.val) || hasPath(root.right, targetSum - root.val);
};
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(hasPath(root, 23));
var root1 = new TreeNode(12);
root1.left = new TreeNode(7);
root1.right = new TreeNode(1);
console.log(hasPath(root, 20));
