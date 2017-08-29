//find the total damage for player-dorkman

const dragonEvent = [
{type: 'attack', value: 12, target: 'player-dorkman'},
{type: 'yawn', value: 40},
{type: 'eat', type: 'horse'},
{type: 'attack', value: 23, target: 'player-fluffykins'},
{type: 'attack', value: 12, target: 'player-dorkman'}]

const totalDamageOnDorkan = () =>{
	let total = 0;
	for(i=0; i < dragonEvent.length; ++i)
		if(dragonEvent[i].target === 'player-dorkman'){
			total += dragonEvent[i].value
		}	
		return total;
}

totalDamageOnDorkan()

const justTypes= dragonEvent.map((name) => name.type)
console.log(justTypes)

const justDorkman = dragonEvent.filter((name) => name.target === 'player-dorkman')
console.log(justDorkman)