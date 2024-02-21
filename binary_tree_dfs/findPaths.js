var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var findPaths = function (root, sum) {
    var outputPaths = [];
    findPathsRecursive(root, sum, [], outputPaths);
    return outputPaths;
};
var findPathsRecursive = function (currentNode, sum, currentPath, outputPaths) {
    // terminal -> past leaf node
    if (currentNode === null) {
        return;
    }
    else {
        currentPath.push(currentNode.val);
    }
    console.log("new current node ".concat(currentNode.val, "- current Path ").concat(currentPath));
    // terminal -> sum is found at leaf -> add to output
    if (currentNode.left === null && currentNode.right === null && sum === currentNode.val) {
        outputPaths.push(__spreadArray([], currentPath, true));
    }
    // if sum < currentNode -> add to current path and find paths for left and right node
    if (sum !== currentNode.val) {
        findPathsRecursive(currentNode.left, sum - currentNode.val, currentPath, outputPaths);
        findPathsRecursive(currentNode.right, sum - currentNode.val, currentPath, outputPaths);
    }
    // pop the last node when complete
    currentPath.pop();
};
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
var sum = 23, result = findPaths(root, sum);
console.log(result);
