const LinkedList = require('./LinkedList');
const assert = require('assert');
let ll = new LinkedList();
ll.add(12);
ll.add(43);
ll.add(76);
ll.add(22).add(55);
ll.printList();
let l2 = new LinkedList();
l2.add(12);
l2.add(43);
l2.add(76);
l2.add(22).add(55);
l2.printList();

assert.deepStrictEqual(ll, l2);