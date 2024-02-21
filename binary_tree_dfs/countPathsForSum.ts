class TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;

    constructor(val, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.val = val
    }
}

const countPaths = (root: TreeNode, targetSum: number): number => {
    return countPathsRecursive(root, [], targetSum);
};

const countPathsRecursive = (currentNode: TreeNode, currentPath: number[], targetSum: number): number => {
    // examine if each node has a path by looking backwards
    // countPathsRecursive will either return 0 or 1 (no double counts)
    // aggregator reset at every node
    let pathCount = 0;
    // terminal case - node is leaf
    if (currentNode === null) {
        return 0;
    }
    // add val to current path
    currentPath.push(currentNode.val);

    // current node has path with sum (moving backwards)
    if (currentPathHasSum(currentPath, targetSum)) {
        pathCount +=1;
    }

    // find paths over left and right trees
    pathCount += countPathsRecursive(currentNode.left, currentPath, targetSum);
    pathCount += countPathsRecursive(currentNode.right, currentPath, targetSum);

    currentPath.pop();
    return pathCount;
};

const currentPathHasSum = (numbers: number[], targetSum: number): boolean => {
    let sum = 0;
    //iterate over numbers backwards
        // add current to calcSum
        // if targetSum === calcSum return true

    for (let i = numbers.length -1; i >=0; i--) {
        let num = numbers[i];
        sum += num;
        if (sum === targetSum) return true;
    }

    return false;
}

const countPathsOptimal = (root: TreeNode, targetSum: number): number => {
    const prefixSumsMap = {};
    return countPathsRecursiveOptimal(root, targetSum, 0, prefixSumsMap);
}

const countPathsRecursiveOptimal = (currentNode: TreeNode, targetSum, currentPathSum: number, prefixSumsMap): number => {
    if (!currentNode) return 0;

    let pathCount = 0;
    
    // prefix sum
    currentPathSum += currentNode.val;
    
    // ideal case -> the node val === target Sum
    if (targetSum === currentPathSum) {
        pathCount ++;
    }
    // if (pathSum - target Sum in the prefix array)
    // reasoning: the position of the prefix sum in the prefix 'array'to the current node === target sum
    // (we stored the prefix array in a map for O1 lookup time)
    if (prefixSumsMap[currentPathSum - targetSum]) {
        pathCount += prefixSumsMap[currentPathSum - targetSum];
    }
    // update the prefix array map
    prefixSumsMap[currentPathSum] = prefixSumsMap[currentPathSum] +1 || 1;
    console.log('updated prefix sums map', prefixSumsMap);

    pathCount += countPathsRecursiveOptimal(currentNode.left, targetSum, currentPathSum, prefixSumsMap);
    pathCount += countPathsRecursiveOptimal(currentNode.right, targetSum, currentPathSum, prefixSumsMap);

    // backtrack
    prefixSumsMap[currentPathSum] = prefixSumsMap[currentPathSum] -1;

    return pathCount;
};



const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
// console.log(`Tree has paths: ${countPaths(root, 5)}`); // 4
console.log(`Tree has paths: ${countPathsOptimal(root, 5)}`);