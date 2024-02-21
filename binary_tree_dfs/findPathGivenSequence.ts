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

const findPath = (root: TreeNode, sequence: number[]): boolean => {
    if (root == null) {
        return sequence.length === 0;
    }

    const findPathRecursive = (node: TreeNode, sequence, index): boolean => {
        // terminal negative path ->
        if (node === null) return false;
        // terminal happy path ->
            // at leaf node && at end of sequence
            // node val = last val in sequence
        if (index === sequence.length -1 && sequence[index] === node.val && node.left === null && node.right === null) {
            return true;
        }

        // compare recursions over left and right nodes
        return findPathRecursive(node.left, sequence, index +1) || findPathRecursive(node.right, sequence, index + 1);
    };

    return findPathRecursive(root, sequence, 0);
}

var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${findPath(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${findPath(root, [1, 1, 6])}`)