/**
 * 203. 移除链表元素
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 * https://leetcode.cn/problems/remove-linked-list-elements/description/
*/

//1.虚拟头节点法。
var removeElements = function (head, val) {
  const dummyNode = new ListNode();
  dummyNode.next = head;
  let current = dummyNode;
  while (current.next !== null) {
      if (current.next.val === val) {
          current.next = current.next.next;
          continue;
      }
      current = current.next;
  }
  return dummyNode.next;
};

//2.普通方法
var removeElements = function (head, val) {
  // 1.处理头节点
  while (head !== null && head.val === val) {
      head = head.next;
  }
  if (head === null) {
      return null;
  }
  let current = head;
  // 2.非头节点
  while (current.next !== null) {
      if (current.next.val === val) {
          current.next = current.next.next;
          continue;
      }
      current = current.next;
  }
  return head;
};