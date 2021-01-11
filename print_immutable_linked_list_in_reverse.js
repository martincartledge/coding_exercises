// https://leetcode.com/problems/print-immutable-linked-list-in-reverse/

// recursive
var printLinkedListInReverse = function (head) {
  if (!head) return;
  printLinkedListInReverse(head.getNext());
  head.printValue();
};

// iterative
var printLinkedListInReverse = function (head) {
  if (!head) return;
  let current = head;
  let stack = [];

  while (current) {
    stack.push(current);
    current = current.getNext();
  }

  while (stack.length) {
    let node = stack.pop();
    node.printValue();
  }
};
