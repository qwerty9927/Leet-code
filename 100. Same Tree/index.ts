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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let result: boolean = true
  const NLR = (node1: TreeNode | null | undefined, node2: TreeNode | null | undefined) => {
    if (node1 == null && node2 == null) return
    if (node1?.val != node2?.val) {
      result = false
      return
    }
    NLR(node1?.left, node2?.left)
    NLR(node1?.right, node2?.right)
  }
  NLR(p, q)

  return result
}
