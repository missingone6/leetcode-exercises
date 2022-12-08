/**
 * 19. 删除链表的倒数第 N 个结点
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
*/

//双指针
var removeNthFromEnd = function (head, n) {
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let fast = dummyHead;
  let slow = dummyHead;
  while (n-- && fast) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
};