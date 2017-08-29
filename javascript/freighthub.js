//======================= ONE ========================

function arrTranform() {
	let a = [2, 4, 6, 8, 9, 15];
	let b = ['4','16','64'];
	return aToB = Array.from(new Set(b))
}

arrTranform()
// function arrTransform() {
// 	let a = [2, 4, 6, 8, 9, 15];
// 	let b = ['4', '16', '64'];
// 	let arrNew = [];
// 	for(i=0; i<a.length; i++) {
// 		for(j=0; j<b.length; j++) {
// 			if (Math.pow(a[i], 2) === parseInt(b[i])){
// 				arrNew.push(Math.pow(a[i], 2))
// 			}
// 		}
// 	}
// 	console.log(arrNew);		
// }

// arrTransform();


///////////////////////////////////////////////


//======================= TWO ========================

let requests = [
{requestId: 'poiax',  startedAt: 1489744808, ttl: 8},
{requestId: 'kdfhd',  startedAt: 1489744803, ttl: 3},
{requestId: 'uqwyet', startedAt: 1489744806, ttl: 12}, 
{requestId: 'qewaz',  startedAt: 1489744810, ttl: 1}
];

let cumulativeTtl= requests.reduce((sum, request) => sum + request.ttl, 0)

// cumulativeTtl = () => {
// 	let total = 0;
// 	for(i=0; i < requests.length; i++) {
// 		total = total + requests[i].ttl;
// 	}
// 	return total
// }

// cumulativeTtl();









//======================= THREE ========================

const fs = require('fs')

function classPolygon(){
	let polygonObj = fs.readFileSync('polygon.txt', 'utf8')
		.trim()
		.split('\r\n')

	function polygonString(a){
		let result = "";

		switch (a) {
			case 3:
				result = "Triangle";
				break;
			case 4:
				result = "Tetragon";
				break;
			case 5:
				result = "Pentagon";
				break;
			case 6:
				result = "Hexagon";
				break;
			default:
				result = "That is it!";
		}
		return result;
	}

	polygonObj.forEach(function(polygonArr) {
		console.log(polygonArr, polygonString(polygonArr.split(',').length))
	})

}

classPolygon();
	
