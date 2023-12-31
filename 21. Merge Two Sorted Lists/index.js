var mergeTwoLists = function (list1, list2) {
  let head = list1
  let tail = list1
  if (list1 === null) {
    return list2
  }
  while (list1 && list2) {
    if (list1.val > list2.val) {
      list1.next = new ListNode(list1.val, list1.next)
      list1.val = list2.val
      list2 = list2.next
    }
    tail = list1
    list1 = list1.next
  }
  if (list2 != null) {
    tail.next = list2
  }
  return head
}
