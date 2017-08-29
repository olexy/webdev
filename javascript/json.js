const ANCESTRY_FILE = require("./ancestry.js")

let ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length)

function findYoung(){
	//console.log(ancestry)
	const BASE_YEAR = 1925;
	let young = [];
	for(i=0; i < ancestry.length; ++i){
		if(ancestry[i].born - BASE_YEAR <= 18){
			young.push(ancestry[i].name)
		}
		return young;
	}

}


console.log(findYoung());

//Earliest born year
let youngest = ancestry.reduce((fbd, dob) =>{		//fbd is equal to first born day as the starting value
	if(fbd.born > dob.born){
		return dob
	}
	return fbd;

}, ancestry[0])

console.log(youngest)