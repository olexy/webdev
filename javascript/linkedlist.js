//CREATE LINKEDLIST CONSTRUCTOR FUNCTION
function LinkedList() {
  this.head = null;
  this.tail = null;
}

//CREATE NODE CONSTRUCTOR FUNCTION
function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// CREATE A PROTOTYPE ADDTOHEAD FUNCTION FOR THE LINKEDLIST CONTRUCTOR FUNCTION
LinkedList.prototype.addToHead = function(value) {
	let newNode = new Node(value, this.head, null);			//create a new node and set value to the params value & next point to the existing head
	if(this.head){											//if theres an existing head
		this.head.prev = newNode;							//set the previous pointer to the newly created node
	} else{
		this.tail = newNode;								//otherwise, set the the newly created node as the tail
	}
	this.head = newNode;									//either way, set the newly created node as the head
}

//CREATE A LINKEDLIST FROM THE CONSTRUCTOR FUNCTION
let ll = new LinkedList();

//CALL THE PROTOTYPE FUNCTION
// ll.addToHead(100);
// ll.addToHead(120);
// ll.addToHead(300);
// console.log(ll);

// CREATE A PROTOTYPE ADDTOTAIL FUNCTION FOR THE LINKEDLIST CONTRUCTOR FUNCTION
LinkedList.prototype.addToTail = function(value){
	let newNode = new Node(value, null, this.tail)		//create a new node and set value to the params value & next point to the existing head
	if(this.tail){										//if theres an existing tail
		this.tail.next = newNode;
	}else{
		this.head = newNode								//otherwise, set the the newly created node as the head
	}
	this.tail = newNode;								//either way, set the newly created node as the tail
};

//CREATE A LINKEDLIST FROM THE CONSTRUCTOR FUNCTION
let myLL = new LinkedList();

//CALL THE PROTOTYPE FUNCTION
myLL.addToTail(15);
myLL.addToTail(32);
myLL.addToTail(76);
myLL.addToHead(100)

console.log(myLL);
// console.log(myLL.tail.prev);
// console.log(myLL.tail.prev.prev.prev);

// CREATE A PROTOTYPE REMOVEHEAD FUNCTION FOR THE LINKEDLIST CONSTRUCTOR FUNCTION
LinkedList.prototype.removeHead = function(){
	if(!this.head) return null;							//	return null if the node is empty
	let val = this.head.value;							// save the value of the head node to a variable 'val'
	this.head = this.head.next							// change the head to the next node of the current head
	if(this.head) this.head.prev = null;
	else this.tail = null;
	return val;		
};

myLL.removeHead();

let anotherLL = new LinkedList();	//CREATE A NEW LINKED LIST

//CALL THE ADDTOHEAD & ADDTOTAIL PROTOTYPE FUNCTIONS
anotherLL.addToHead(1000);
anotherLL.addToHead(2000);
anotherLL.addToTail(904);

//CALL THE REMOVEHEAD PROTOTYPE FUNCTION
anotherLL.removeHead();

// CREATE A PROTOTYPE REMOVETAIL FUNCTION FOR THE LINKEDLIST CONSTRUCTOR FUNCTION
LinkedList.prototype.removeTail = function() {
	if(!this.tail) return null;			//	return null if the node is empty
	let val = this.tail.value;			// save the value of the tail node to a variable 'val'
	this.tail = this.tail.prev;			// change the tail to the previou node of the current tail
	if(this.tail) this.tail.next = null	// check if the tail exists and set next to null
	else this.head = null;				// otherwise set head to null
	return val;
};

let anLL = new LinkedList();	//CREATE A NEW LINKED LIST