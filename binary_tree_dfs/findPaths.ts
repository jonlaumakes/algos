class TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;

    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const findPaths = (root, sum) => {
    const outputPaths: number[][] = [];
    findPathsRecursive(root, sum, [], outputPaths);

    return outputPaths;
}

const findPathsRecursive = (currentNode: TreeNode, sum: number, currentPath: number[], outputPaths: number[][]) => {
    // terminal -> past leaf node
    if (currentNode === null) {
        return
    }

    currentPath.push(currentNode.val);
    console.log(`new current node ${currentNode.val}- current Path ${currentPath}`);
    // terminal -> sum is found at leaf -> add to output
    if (currentNode.left === null && currentNode.right === null && sum === currentNode.val) {
        outputPaths.push([...currentPath]);
    }
    // if sum < currentNode -> add to current path and find paths for left and right node
    if (sum !== currentNode.val) {
        findPathsRecursive(currentNode.left, sum - currentNode.val, currentPath, outputPaths);
        findPathsRecursive(currentNode.right, sum - currentNode.val, currentPath, outputPaths);
    }
    // pop the last node when complete
    currentPath.pop();
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let sum = 23,
    result = findPaths(root, sum);
console.log(result);
