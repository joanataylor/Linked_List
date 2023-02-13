/*
 * A class to represent a single node of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/*
 * This class keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    // return true if empty, false if not
    return this.head == null;
  }

  insertAtBack(data) {
    // add a new node to the back of the list
    const newBack = new ListNode(data);
    let runner = this.head;

    if (runner === null) {
      this.head = newBack;
    } else {
      while (runner.next) {
        runner = runner.next;
      }
      runner.next = newBack;
    }
    return this;
  }

  insertAtBackMany(arr) {
    // add each val from an array
    for (let i = 0; i < arr.length; i++) {
      this.insertAtBack(arr[i]);
    }
    return this;
  }

  toArr() {
    // return an array containing all vals
    const newArr = [];
    let runner = this.head;
    while (runner) {
      newArr.push(runner.data);
      runner = runner.next;
    }
    return newArr;
  }

  insertAtBackRecursive(data, runner = this.head) {
    if (!runner.next) {
      runner.next = new ListNode(data);
      return this;
    }
    return this.insertAtBackRecursive(data, runner.next);
  }

  //////////////! WEDNESDAY //////////////////////
  /* Creates a new node with the given data and inserts that node at the front
   * of this list.
   * - Time: (?).
   * - Space: (?).
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtFront(data) {
    const newHead = new ListNode(data);
    newHead.next = this.head;
    this.head = newHead;
    return this;
  }
  /**
   * Removes the first node of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    if (!this.isEmpty()) this.head = this.head.next;
    return this;
  }

  // EXTRA
  /**
   * Calculates the average of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
    if (!this.head) return null;

    let sum = 0,
      counter = 0,
      currentNode = this.head;

    while (currentNode) {
      if (!isNaN(currentNode.data)) {
        counter++;
        sum += currentNode.data;
      }

      currentNode = currentNode.next;
    }
    return sum / counter;
  }

  //////////////! THURSDAY ////////////////

  /**
   * Removes the last node of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data from the node that was removed.
   */
  removeBack() {
    //Checks if the list is empty or it only has one Node,
    //sets head to empty.
    if (this.isEmpty() || !this.head.next) {
      this.head = null;
      return this;
    }

    //Assigns a pointer to go through the list
    let runner = this.head;
    //Iterates through the list and stops just before the last
    //Node with a non-null value
    while (runner.next.next) {
      runner = runner.next;
    }
    //Assigns null to the last Node, then returns the modified list
    runner.next = null;
    return this;
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(val) {
    //Checks if list is empty beforehand
    if (this.isEmpty()) return false;

    //Iterates through list until a value is found
    let runner = this.head;
    while (runner) {
      //checks if value is found in each iteration. If found,
      //return true, otherwise, pointer goes to the next Node.
      if (runner.data === val) return true;
      runner = runner.next;
    }
    //Went through the list and could not find the value, returns false.
    return false;
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?ListNode} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
  containsRecursive(val, current = this.head) {
    //Checks if either list is empty or it reached the end of list and
    //didn't find the value. Returns false.
    if (!current) return false;

    //If it finds the value in this iteration, returns true.
    if (current.data === val) return true;

    //If it doesn't find the value in the iteration, calls itself
    //recursively with the next Node in the list
    return this.containsRecursive(val, current.next);
  }

  // EXTRA
  /**
   * Recursively finds the maximum integer data of the nodes in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {ListNode} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @param {ListNode} maxNode Keeps track of the node that contains the current
   *    max integer as it's data.
   * @returns {?number} The max int or null if none.
   */
  recursiveMax(runner = this.head, maxNode = this.head) {
    //Checks if list is empty or if it's reached the end of the list
    if (!runner) {
      //If it's reached the end of the list and MaxNode isn't null, return that data
      if (maxNode) return maxNode.data;
      //Otherwise return null
      return maxNode;
    }

    //Checks if current value is higher than whatever is stored in MaxNode, then MaxNode
    //is assigned its position in memory.
    if (runner.data >= maxNode.data) maxNode = runner;

    //Calls itself with the next Node in the list for the next check iteration
    return this.recursiveMax(runner.next, maxNode);
  }

  ///! FRIDAY //////////////////////////////

  /**
   * Retrieves the data of the second to last node in this list.
   * @returns {any} The data of the second to last node or null if there is no
   *    second to last node.
   */
  secondToLast() {
    //Checks if the list is empty or it only has one Node, returns null.
    if (this.isEmpty() || !this.head.next) {
      return null;
    }

    //Assigns a pointer to go through the list
    let runner = this.head;
    //Iterates through the list and stops just before the last
    //Node with a non-null value
    while (runner.next.next) {
      runner = runner.next;
    }
    //Returns data found in second to last node
    return runner.data;
  }

  /**
   * Removes the node that has the matching given val as it's data.
   * @param {any} val The value to compare to the node's data to find the
   *    node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */
  removeVal(val) {
    //Checks if list is empty beforehand
    if (this.isEmpty()) return false;

    //Iterates through list until a value is found
    let runner = this.head, previousNode = null;
    while (runner) {
      //checks if value is found in each iteration. If found,
      //return true, otherwise, pointer goes to the next Node.
      if (runner.data === val) {
        previousNode.next = runner.next;
        runner = null;
        return true;
      }
      previousNode = runner;
      runner = runner.next;
    }
    //Went through the list and could not find the value, returns false.
    return false;
  }

  // EXTRA
  /**
   * Inserts a new node before a node that has the given value as its data.
   * @param {any} newVal The value to use for the new node that is being added.
   * @param {any} targetVal The value to use to find the node that the newVal
   *    should be inserted in front of.
   * @returns {boolean} To indicate whether the node was pre-pended or not.
   */
  prepend(newVal, targetVal) {
    //Checks if list is empty beforehand
    if (this.isEmpty()) return false;

    //Iterates through list until a value is found,
    //keeping track of the previous node for insertion
    let runner = this.head,
      previousNode = null;
    while (runner) {
      //checks if value is found in each iteration.
      if (runner.data === targetVal) {
        //Value is found, create a new node
        const newNode = new ListNode(newVal);

        //Checks if list has a previous node, then assigns
        //newNode to the previous node's.next
        if (previousNode) previousNode.next = newNode;
        //There is no previous node, new Node is now the head
        //of the list
        else newNode = this.head;

        //Assign's new node's next to the runner position to where found
        //value is stored, then returns true
        newNode.next = runner;
        return true;
      }
      //Iterating to the next node
      previousNode = runner;
      runner = runner.next;
    }
    //Went through the list and could not find the value, returns false.
    return false;
  }
}

const unorderedList = new SinglyLinkedList().insertAtBackMany([
  -5, -10, 4, -3, 6, 1, -7, -2,
]);
const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);

console.log("Original unorderedList: " + unorderedList.toArr() + "\n");
console.log("Original singleNodeList: " + singleNodeList.toArr() + "\n");
console.log(
  "unorderedList after searching second to last: " +
    unorderedList.secondToLast() +
    "\n"
);
console.log(
  "singleNodeList after searching second to last: " +
    singleNodeList.secondToLast() +
    "\n"
);
console.log(
  "unorderedList after checking if it contains -10 to remove it: " +
    unorderedList.removeVal(-10) +
    "\n"
);
console.log(
  "unorderedList after running removeVal(-10): " + unorderedList.toArr() + "\n"
);
console.log(
  "unorderedList after checking if it contains 10 to remove it: " +
    unorderedList.removeVal(10) +
    "\n"
);
console.log(
  "unorderedList after running removeVal(10): " + unorderedList.toArr() + "\n"
);
console.log(
  "unorderedList after prepending -10 before 4: " +
    unorderedList.prepend(-10, 4) +
    "\n"
);
console.log(
  "unorderedList after running prepend -10: " + unorderedList.toArr() + "\n"
);
console.log(
  "unorderedList after prepending 0 before 555: " +
    unorderedList.prepend(0, 555) +
    "\n"
);
console.log(
  "unorderedList after running prepend 555: " + unorderedList.toArr() + "\n"
);