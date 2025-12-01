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

function isSymmetric(root: TreeNode | null): boolean {
  const stackLeftSide: (TreeNode | null | undefined)[] = [root?.left]
  const stackRightSide: (TreeNode | null | undefined)[] = [root?.right]

  while (stackLeftSide.length != 0 || stackRightSide.length != 0) {
    let node1 = stackLeftSide.pop()
    let node2 = stackRightSide.pop()

    if (!node1 && !node2) continue
    if (node1?.val == null || node2?.val == null || node1?.val != node2?.val) {
      return false
    }

    stackLeftSide.push(node1?.left)
    stackLeftSide.push(node1?.right)
    stackRightSide.push(node2?.right)
    stackRightSide.push(node2?.left)
  }

  return true
}
