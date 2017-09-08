class Stack{
	constructor(){
		this.dataStore = [];
		this.top = 0;
	}

	push(e){
		this.dataStore[this.top++] = e;
	}

	peek(){
		return this.dataStore[this.top - 1]
	}

	pop(){
		return this.dataStore[--this.top];
	}

	clear(){
		this.top = 0
	}

	length(){
		return this.top;
	}

}

var s = new Stack();
s.push("Lekan");
s.push("Adams");
s.push("David");
s.push("Donald");
s.push("Paul");
s.push("John");
s.push("Pretty");

s.pop();

console.log("Length: " + s.length());
console.log("Length: " + s.peek());

var wordSTK = new Stack();
var word = "bob"
var word2 = "";
for(i=0; i<word.length; i++)
	wordSTK.push(word[i])

while(wordSTK.length() > 0){
	word2 += wordSTK.pop()
}

console.log(word2)
if (word2 === word){
	console.log(word + " is a palindrome");
}else{
	console.log(word + " is not a palindrome");
}


//function stkRecursion(num){
var numSTK = new Stack();
var num = 5;
while(num > 1)
	numSTK.push(num--)

var total = 1;

while(numSTK.length() > 0){
	total *= numSTK.pop();
}

console.log(total) 
//}

//stkRecursion(5)

