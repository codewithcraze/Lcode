/*

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value){
        let newNode = new ListNode(value);
        if(!this.head){
            this.head = newNode;
            return this;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    print(){
        let current = this.head;
        let values = [];
        while(current){
            values.push(current.val);
            current = current.next;
        }
        console.log(values);
    }

    prepend(value){
        this.head = new ListNode(value, this.head);
        return this;
    }

    delete(value){
        if (!this.head) return;

        if (this.head.val === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.val !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    reverse(){
        let prev = null;
        let current = this.head;

        while(current){
            let newNode = current.next;
            current.next = prev;
            prev = current;
            current = newNode;
        }

        this.head = prev;
    }

    detectCycle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) return true;  // ✅ Detects cycle properly
        }
        return false;
    }

    middleOfLinkedList(){
        let slow = this.head;
        let fast = this.head;

        while(fast && fast.next){
            slow  = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(3);
list.append(3);
list.append(3);
list.append(3);
list.prepend(0);
list.reverse();
console.log(list.detectCycle());
console.log(list.middleOfLinkedList());
list.print();

*/

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeSortedLists(l1, l2) {
    let dummy = new ListNode(-1); // Dummy node to simplify merging
    let current = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Attach the remaining nodes (if any)
    if (l1) current.next = l1;
    if (l2) current.next = l2;

    return dummy.next; // Return merged sorted list
}

// ✅ Helper Function to Print Linked List
function printList(head) {
    let current = head, values = [];
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    console.log(values);
}

// ✅ Creating Two Sorted Linked Lists
let l1 = new ListNode(1, new ListNode(2, new ListNode(3)));
let l2 = new ListNode(2, new ListNode(4, new ListNode(6)));

console.log("List 1:");
printList(l1);

console.log("List 2:");
printList(l2);

let mergedList = mergeSortedLists(l1, l2);


// Remove duplicates from a sorted linked list

function removeDuplicates(mergedList){
    let current = mergedList;
    while(current && current.next){
        if(current.val === current.next.val){
            current.next = current.next.next;
        }
        current = current.next;
    }
    return mergedList;
}





const result = removeDuplicates(mergedList);

console.log(result);






