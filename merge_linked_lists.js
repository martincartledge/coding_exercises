class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

const mergedList = new LinkedList(1);

mergedList.append(2);
mergedList.append(3);
mergedList.append(4);
mergedList.append(5);
mergedList.append(6);

console.log(mergedList);
