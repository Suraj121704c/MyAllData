class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addNode(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    reverse() {
      let current = this.head;
      let prev = null;
      let next = null;
  
      while (current !== null) {
        next = current.next; // Store the next node
        current.next = prev; // Reverse the link
  
        // Move prev and current one step forward
        prev = current;
        current = next;
      }
  
      this.head = prev; // Update the head of the reversed list
    }
  
    printList() {
      let current = this.head;
      let list = '';
      while (current !== null) {
        list += current.value + ' -> ';
        current = current.next;
      }
      list += 'null';
      console.log(list);
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);
  linkedList.addNode(4);
  
  console.log('Original List:');
  linkedList.printList();
  
  linkedList.reverse();
  
  console.log('Reversed List:');
  linkedList.printList();