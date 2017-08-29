// //============================================================== Reduce function vs for loop ========================================================

let orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325},
]

// REDUCE FUNCTION
// let orderTotal = orders.reduce(function(sum, order){
//   return sum + order.ammount;
// }, 0) //'0'is the starting sum

//ES6
let orderTotal = orders.reduce((sum, order) => sum + order.ammount, 0)


// // FOR LOOP
// let orderTotal = 0;
// for(i=0; i<orders.length; i++){
//   orderTotal = orderTotal + orders[i].amount;
// }

// console.log(orderTotal)

// //freeCodeCamp
// //Use the reduce method to sum all the values in array and assign it to singleVal.
// var array = [4,5,6,7,8];
// var singleVal = 0;

// singleVal = array.reduce(function(sum, array){
//   return sum + array
// }, 0);  //'0' is the initial value called sum

// ADVANCED REDUCE =================

const fs = require('fs');

let output = fs.readFileSync('dummy.txt', 'utf8')
	.trim()		//removes extra space at the end
	.split('\n')
	.map(line => line.split('\t')) //covert each line into individaul array-like object using map and split functions
	.reduce((customers, line) => {
		customers[line[0]] = customers[line[0]] || []
		customers[line[0]].push({
			name: line[1],
			price: line[2],
			quantity: line[3]
		})
		return customers
	}, {})

console.log('output', JSON.stringify(output, null, 2))
//console.log(output)