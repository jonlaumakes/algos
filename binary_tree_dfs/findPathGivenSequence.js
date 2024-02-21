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
var findPath = function (root, sequence) {
    if (root == null) {
        return sequence.length === 0;
    }
    var findPathRecursive = function (node, sequence, index) {
        // terminal negative path ->
        if (node === null)
            return false;
        // terminal happy path ->
        // leaf node
        // node val = last val in sequence
        if (index === sequence.length - 1 && sequence[index] === node.val && node.left === null && node.right === null) {
            return true;
        }
        // compare recursions over left and right nodes
        return findPathRecursive(node.left, sequence, index + 1) || findPathRecursive(node.right, sequence, index + 1);
    };
    return findPathRecursive(root, sequence, 0);
};
var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log("Tree has path sequence: ".concat(findPath(root, [1, 0, 7])));
console.log("Tree has path sequence: ".concat(findPath(root, [1, 1, 6])));
