class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []

  // LNR
  const LNR = (node: TreeNode | null) => {
    if (node == null || node.val == null) return
    LNR(node.left)
    result.push(node.val)
    LNR(node.right)
  }
  LNR(root)

  return result
}
