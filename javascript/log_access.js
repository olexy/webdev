const fs = require('fs')

function include(arr,obj) {
    			return (arr.indexOf(obj) != -1);
    		}

function logAccess(){
	let accessObj = fs.readFileSync('cyberoptions_access_log_00.txt', 'utf8')
		.trim()
		.split('\r\n')

		function getDomain(){

			let arr = accessObj.map(function (str) {
				return str.split(' ')[0];
			})
			let found = [];
			let result = {};
			arr.map(function(item) {
				if(include(found, item)) {
					result[item] += 1;
				} else {
					found.push(item);
					result[item] = 1;
				}
			})
			console.log(JSON.stringify(result));
			return result;
		}

		getDomain();


	console.log(accessObj)

}

logAccess();