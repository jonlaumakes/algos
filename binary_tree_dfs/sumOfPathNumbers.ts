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

const findSumOfPathNumbers = (tree: TreeNode): number => {
    const paths = [];
    // get paths
    findSumOfPathNumbersRecursive(tree, [], paths);
    // calc paths
    return calcPaths(paths);
};

const calcPaths = (paths: number[][]): number => {
    let sum = 0;
    for (let i = 0; i < paths.length; i++) {
        let path = paths[i];
        let pathSum = 0;
        for (let j = 0; j < path.length; j++) {
            let digit = path[j];
            pathSum = pathSum * 10 + digit;
        }
        console.log('pathsum', pathSum);
        sum += pathSum;
    }
    return sum;
}

const findSumOfPathNumbersRecursive = (currentNode: TreeNode, currentPath: number[], paths: number[][]): void => {
    // terminal case
    if (currentNode === null) return;

    // add current val to current path
    currentPath.push(currentNode.val);
    console.log('current path', currentPath);

    // terminal case -> leaf node
    if (currentNode.left === null && currentNode.right === null) {
        paths.push(currentPath.slice(0));
    }

    findSumOfPathNumbersRecursive(currentNode.left, currentPath, paths)
    findSumOfPathNumbersRecursive(currentNode.right, currentPath, paths)

    // backtrack
    currentPath.pop();
}


var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${findSumOfPathNumbers(root)}`)