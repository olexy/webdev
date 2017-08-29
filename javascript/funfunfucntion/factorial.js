// Factorial with loop
factorial = (num) => {
var total = 1;
for(var i=num; i>=1; --i){
	total *= i;
}
console.log (total);

}
factorial(5)