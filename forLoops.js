
console.log("For Loop for Even Numbers between 2 and 30");

for(var counter = 0; counter <= 28; counter++){
	if(counter % 2 === 0){
		console.log(counter);
	}
}

console.log("For Loop for Odd Numbers between 3 and 33");

for(var counter = 0; counter <= 33; counter++){
	if(counter % 2 !==0){
		console.log(counter);
	}
}

console.log("For Loop for numbers divisible by 3 and 5 between 5 and 50");

for(counter = 5; counter <= 50; counter++){
	if(counter % 3 === 0 && counter % 5 ===0){
		console.log(counter);
	}
}

console.log("For Loop for numbers that are divisible by 3 and 4");

for(counter = 3; counter <= 36; counter++){
	if(counter % 3 === 0 && counter % 4 === 0){
		console.log(counter);
	}
}
