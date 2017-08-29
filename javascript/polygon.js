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
