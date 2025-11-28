class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let arrL1: number[] = []
  let arrL2: number[] = []
  let myList: ListNode = new ListNode()
  let head: ListNode = myList
  let tail: ListNode = new ListNode()
  let temp: number = 0
  let result = 0
  let i = 0

  while (l1 != null) {
    arrL1.push(l1.val)
    l1 = l1.next
  }

  while (l2 != null) {
    arrL2.push(l2.val)
    l2 = l2.next
  }

  while (arrL1.length > i || arrL2.length > i) {
    if (arrL1[i] != undefined && arrL2[i] != undefined) {
      result = arrL1[i] + arrL2[i] + temp
    } else {
      result = (arrL1[i] ?? arrL2[i]) + temp
    }
    myList.val = result % 10
    temp = Math.floor(result / 10)
    myList.next = new ListNode()
    tail = myList
    myList = myList.next
    i++
  }
  if (temp != 0) {
    tail.next.val = temp
  } else {
    tail.next = null
  }
  return head
}
