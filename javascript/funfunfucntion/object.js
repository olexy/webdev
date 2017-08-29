// ======= JAVASCRIPT OBJECT =======

//Declare the Object and the function
function Checking(amount){
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount) {
  console.log(this.balance += amount)
};

function withdraw(amount) {
  if (this.balance <= amount){
    console.log("Invalid Trandaction")
  } else {
    console.log(this.balance -= amount) 
  }
}

function toString(amount){
  console.log("Balance: " + this.balance);
}

//create and instance of the object
var account = new Checking(500);
account.deposit(200);
account.withdraw(125);
account.toString();