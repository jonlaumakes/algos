var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.left = left;
        this.right = right;
        this.val = val;
    }
    return TreeNode;
}());
var countPaths = function (root, targetSum) {
    return countPathsRecursive(root, [], targetSum);
};
var countPathsRecursive = function (currentNode, currentPath, targetSum) {
    // examine if each node has a path by looking backwards
    // countPathsRecursive will either return 0 or 1 (no double counts)
    // aggregator reset at every node
    var pathCount = 0;
    // terminal case - node is leaf
    if (currentNode === null) {
        return 0;
    }
    // add val to current path
    currentPath.push(currentNode.val);
    // current node has path with sum (moving backwards)
    if (currentPathHasSum(currentPath, targetSum)) {
        pathCount += 1;
    }
    // find paths over left and right trees
    pathCount += countPathsRecursive(currentNode.left, currentPath, targetSum);
    pathCount += countPathsRecursive(currentNode.right, currentPath, targetSum);
    currentPath.pop();
    return pathCount;
};
var currentPathHasSum = function (numbers, targetSum) {
    var sum = 0;
    //iterate over numbers backwards
    // add current to calcSum
    // if targetSum === calcSum return true
    for (var i = numbers.length - 1; i >= 0; i--) {
        var num = numbers[i];
        sum += num;
        if (sum === targetSum)
            return true;
    }
    return false;
};
var countPathsOptimal = function (root, targetSum) {
    var prefixSumsMap = {};
    return countPathsRecursiveOptimal(root, targetSum, 0, prefixSumsMap);
};
var countPathsRecursiveOptimal = function (currentNode, targetSum, currentPathSum, prefixSumsMap) {
    if (!currentNode)
        return 0;
    var pathCount = 0;
    // prefix sum
    currentPathSum += currentNode.val;
    // ideal case -> the node val === target Sum
    if (targetSum === currentPathSum) {
        pathCount++;
    }
    // if (pathSum - target Sum in the prefix array)
    // reasoning: the position of the prefix sum in the prefix 'array'to the current node === target sum
    // (we stored the prefix array in a map for O1 lookup time)
    if (prefixSumsMap[currentPathSum - targetSum]) {
        pathCount += prefixSumsMap[currentPathSum - targetSum];
    }
    // update the prefix array map
    prefixSumsMap[currentPathSum] = prefixSumsMap[currentPathSum] + 1 || 1;
    console.log('updated prefix sums map', prefixSumsMap);
    pathCount += countPathsRecursiveOptimal(currentNode.left, targetSum, currentPathSum, prefixSumsMap);
    pathCount += countPathsRecursiveOptimal(currentNode.right, targetSum, currentPathSum, prefixSumsMap);
    // backtrack
    prefixSumsMap[currentPathSum] = prefixSumsMap[currentPathSum] - 1;
    return pathCount;
};
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
// console.log(`Tree has paths: ${countPaths(root, 5)}`); // 4
console.log("Tree has paths: ".concat(countPathsOptimal(root, 5)));
