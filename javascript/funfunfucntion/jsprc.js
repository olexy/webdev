multiplier = (factor) => {
  return  (number) =>{      //anonymus function
    return factor * number;
  }
}

let times = multiplier(2);
console.log(times(5));


cowChickenStock = (numCow, numChk) => {
  let strCow  = String(numCow)
  let strChicken = String(numChk)
  if(strCow.length <= 1 || strChicken.length <= 1){
      console.log("00" + numCow);
      console.log("00" + numChk)
  } else if (strCow.length > 1 || strChicken.length > 1) {
    console.log("0" + numCow);
    console.log("0" + numChk)
  }
}

cowChickenStock(1, 12)
//making product generic
prdLabel = (prod, qty) => {
  let strQty = String(qty);
    if(strQty.length <= 1){
      console.log(prod +" = 00" + strQty);
    }else if (strQty.length >= 2) {
      console.log(prod +" = 0"+ strQty)
    };
};

prdLabel("cow", 12)

//Using while & generic product and
prdLabel2 = (product, qty) => {
  let strQty = String(qty);

  while(strQty.length < 3){
    strQty = "0" + strQty
  }
  console.log(product +" "+ strQty)
}

prdLabel2("Pig", 6)

//min function
var x = 10, y = -20;
var z = Math.min(x, y);
console.log(z)

findMin = (a, b) => {
  if (a >= b){
    console.log(b + " is the Min")
  }else{
    console.log(a + " is the Min");
  }

}

findMin(9,3);

isPrime = (num) => {
  if(num == 1)
    return false;
  else {
    (isPrime(num) - 2)
      return true
  }
}

isPrime(3)


countBs = (str) => {
  count = 0
  for(i=0; i<str.length; i++){
    if(str[i] === "B"){
      count ++
    }
  }
  return count;
}

countBs("IsBtheBreB")

countChar = (str, n) => {
  count = 0;
  for(i=0; i<str.length; i++)
    if (str[i] === n) {
      count ++
    }
  return count;
}

countChar('theresneenforns')


//================ OBJECTS ===============

Let Car = {
  "wheels": 4;
  "engine": 1;
  "seats": 4;
}

Car => {
  this.wheels = 2;
  this.engine = 1;
  this.seats = 4;
}

//===================================== filter function vs for loop =========================================

// FILTER FUNCTION
let animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
]

// let dog = animals.filter(function(animal){
//   return animal.species === 'dogs';
// })

let dog = animals.reject(function(animal){
  return animal.species === 'dogs';
})

console.log(dog);

//FOR loop
let dogArr = [];
for(i=0; i<animals.length; i++){
  if(animals[i].species === 'dog')
    dogArr.push(animals[i])
}
return dogArr;

console.log(dogArr);


//===================================== Map function vs for loop =======================================

// MAP FUNCTION
let animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
]

//let name = animals.map(function(animal){
//  return animals.name;
//});

name = animals.map((animal) => animals.name);

// FOR LOOP
nameArr = [];
for(i=0; i<animals.length; i++){
  nameArr.push(animals[i].name);
};

console.log(nameArr);

//freeCodeCamp
var oldArray = [1,2,3,4,5];

var newArray = oldArray.map(function(x){
  return x + 3;
});
undefined
console.log(oldArray)



//================================== SORT COMPARE FUNCTION ===============================================
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});


// ======= JAVASCRIPT OBJECT =======

//Declare the Object and the function
function Checking(amount){
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount) {
  return this.balance += amount;
};

function withdraw(amount) {
  if (this.balance <= amount){
    console.log("Invalid Trandaction")
  } else {
    return this.balance -= amount
  }
}

function toString(amount){
  return "Balance: " + this.balance;
}

//create and instance of the object
var account = new Checking(500);
account.deposit(200);
account.withdraw(125);
account.toString(210);

//=================== Find the greatest common divisor of two numbers?

function greatesrDivisor(num1, num2) {
  let divisors = [];
  for(i=1; i <= num2; i++)
    if(num1%i === 0 && num2%i === 0){
      divisors.push(i)
    }
    let largestDivisors = divisors.reduce(function(a,b){
      return Math.max(a, b);
    })
    return largestDivisors;

} 

greatesrDivisor(45, 105);