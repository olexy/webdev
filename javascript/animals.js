const animals = [
	{name: 'Fluffykins', species: 'rabbit'},
	{name: 'Caro', species: 'dog'},
	{name: 'Hamilton', species: 'dog'},
	{name: 'Harold', species: 'fish'},
	{name: 'Ursula', species: 'cat'},
	{name: 'Jimmy', species: 'fish'}
]

//Filtering out the dogs with filter

const dogs = animals.filter((x) => x.species ==='dog')  
console.log(dogs)
// callback is applied to the 1st element of the original array, and if the result is true, then this element gets included in the new array to be returned.
// callback is applied to the 2nd element of the original array, and if the result is true, then this element gets included in the new array to be returned.
// And so on... until the last element of the array is processed, then the new array is returned as the result of filter

//Getting all the name with MAP
const animalNames = animals.map((x) => x.name)  //something that is common to them
console.log(animalNames)

// callback is applied to the 1st element of the original array, and the result is stored as the 1st element of the new array to be returned.
// callback is now applied to the 2nd element of the original array, and the result is stored as the 2nd element of the new array to be returned.
// And so on... until the last element of the array is processed, then the new array is returned as the result of map.
