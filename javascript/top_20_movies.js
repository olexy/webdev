const fs = require('fs');

let movies = fs.readFileSync('films.txt', 'utf8')
.trim()		//removes extra space at the end
.split('\r\n')

//console.log('movies', JSON.stringify(movies, null, 2))

function List(){
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [[],[]];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.append_ = append_;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
  this.insertLarger = insertLarger;
}

function append(e){
  this.dataStore[this.listSize++] = e; 
}

function append_(name, gender){
  this.dataStore.push(name, gender)
  this.listSize++; 
}

function find(e){
  for(i=0; i<this.dataStore.length; ++i){
    if(this.dataStore[i] == e){
      return +1
    }
    return -1
  }
}

function remove(e){
  if(this.find(e)){
    this.dataStore.pop(e)
    --this.listSize
    console.log(this.dataStore)
    console.log(this.listSize)
  }
}

function length(){
  return this.listSize
}


function toString(){
  return this.dataStore;
}

function insert(e, aE){
  let insertPos = this.find(aE)
  if(insertPos > -1){
    this.dataStore.splice(insertPos+1, 0, e) //The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
    ++this.listSize
    return true
  }
  return false;
}

function clear(){
  return this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(e){
  for(i=0; i<this.dataStore.length; ++i){
    if(this.dataStore[i] == e){
      return true;
    }
    return false;
  }
}

function front(){
  this.pos = 0;
}

function end(){
  this.pos = this.listSize + 1;
}

function prev(){
  if(this.pos > 0)
    --this.pos;
}

function next(){
  if(this.pos < this.listSize-1)		//this-listSize-1  == end of list
  	++this.pos;
}

function currPos(){
    return this.pos;
}

function moveTo(position){
    this.pos = position;
}

function getElement(){
    return this.dataStore[this.pos]
}


let moviesList = new List();
for(i=0; i < movies.length; ++i){
	moviesList.append(movies[i]);
}

console.log(moviesList.toString())

let displayList = (list) => {
  for(list.front(); list.currPos() < list.length(); list.next()){
  	if(list.getElement() instanceof Customer) {
  		console.log(list.getElement()["name"] + ", " +
  			list.getElement()["movie"]);
  	}
  	else{
  		console.log(list.getElement());
  	}    
  }
}

//displayList(moviesList);

let customerList = new List();

// let filmList = new List();

function Customer(name, movie){
	this.name = name;
	this.movie = movie;
}

function checkOut(name, movie, moviesList, customerList){
	if(moviesList.contains(movie)) {
		let c = new Customer(name, movie);
		customerList.append(c);		
		moviesList.remove(movie)	
		console.log(customerList.getElement())
	}
	else {
		console.log('Mr. ' + name +', we are sorry ' + movie + ' is not available')
	}
}

checkOut('John Doe', 'City of God', moviesList, customerList)
displayList(customerList)



/*********************************************** EXCERCISE **********************///

let grades = new List();
grades.append(20);
grades.append(70);
grades.append(10);
grades.append(40);

function insertLarger(e){
	for(i=0; i<this.dataStore.length; ++i){
	    if(!this.dataStore[i] == e || this.dataStore[i] < e){
	      this.dataStore[this.listSize++] = e;      
	    }   
  	}
  console.log(grades.toString()) 
}

grades.insertLarger(80)


function Person(name, gender){
	this.name = name;
	this.gender = gender;
}

let personList = new List()
personList.append_("John","male")
personList.append_("Jane","female")
personList.append_("Paul","male")
personList.append_("Paula","female")
personList.append_("Drake","male")
personList.append_("Selina","female")
personList.append_("Lupiter","male")
personList.append_("Kadrina","female")
personList.append_("Dickson","male")
personList.append_("Dubios","male")



// console.log(personList
// 	.toString())

function sameGender(gender, list){
	if(list.contains(gender)){
		console.log(list.toString())
	}

}

sameGender('female', personList); 

