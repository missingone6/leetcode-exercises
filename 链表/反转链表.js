/**
 * 206. 反转链表
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表
 * https://leetcode.cn/problems/reverse-linked-list/description/
 * */

//1.双指针法。
var reverseList = function (head) {
  let previous = null, current = head;
  while (current) {
    const temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  return previous;
};

//2.递归法
var reverseList = function (head) {
  const reverse = (pre, cur) => {
    if (cur === null) return pre;
    const temp = cur.next;
    cur.next = pre;
    return reverse(cur, temp);
  }
  return reverse(null, head);
};