/**
 * 24. 两两交换链表中的节点
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
 * 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * https://leetcode.cn/problems/swap-nodes-in-pairs/description/
*/

var swapPairs = function (head) {
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let current = dummyHead;
  while (current.next !== null && current.next.next !== null) {
    let temp = current.next;
    let temp1 = current.next.next.next;
    current.next = current.next.next;
    current.next.next = temp;
    temp.next = temp1;
    current = temp;
  }
  return dummyHead.next;
};