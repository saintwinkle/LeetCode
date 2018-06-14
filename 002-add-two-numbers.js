/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2, carry) {
  const l1Val = l1 && l1.val;
  const l2Val = l2 && l2.val;
  const l1Next = l1 && l1.next;
  const l2Next = l2 && l2.next;
  const sum = l1Val + l2Val + (carry ? 1 : 0);
  carry = sum >= 10;
  const digit = carry ? sum - 10 : sum;
  const l3 = new ListNode(digit);
  l3.next = l1Next || l2Next
              ? addTwoNumbers(l1Next, l2Next, carry)
              : carry
                ? new ListNode(1)
                : null;
  return l3;
};
