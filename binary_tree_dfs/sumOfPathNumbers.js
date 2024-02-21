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
var findSumOfPathNumbers = function (tree) {
    var paths = [];
    // get paths
    findSumOfPathNumbersRecursive(tree, [], paths);
    // calc paths
    return calcPaths(paths);
};
var calcPaths = function (paths) {
    var sum = 0;
    for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        var pathSum = 0;
        for (var j = 0; j < path.length; j++) {
            var digit = path[j];
            pathSum = pathSum * 10 + digit;
        }
        console.log('pathsum', pathSum);
        sum += pathSum;
    }
    return sum;
};
var findSumOfPathNumbersRecursive = function (currentNode, currentPath, paths) {
    // terminal case
    if (currentNode === null)
        return;
    // add current val to current path
    currentPath.push(currentNode.val);
    console.log('current path', currentPath);
    // terminal case -> leaf node
    if (currentNode.left === null && currentNode.right === null) {
        paths.push(currentPath.slice(0));
    }
    findSumOfPathNumbersRecursive(currentNode.left, currentPath, paths);
    findSumOfPathNumbersRecursive(currentNode.right, currentPath, paths);
    // backtrack
    currentPath.pop();
};
var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log("Total Sum of Path Numbers: ".concat(findSumOfPathNumbers(root)));
