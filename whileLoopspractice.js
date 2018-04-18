// alert("Connected");
console.log("Print Odd Numbers version 1");

var count = 1;

while(count <= 10){
	console.log(count)
	count+=2;
}

// Multipls of Four
console.log("Print multiples of Four");

var multiple = 4;

while(multiple <= 24){
	if(multiple % 4 === 0){
		console.log(multiple);
	}
	multiple++;
}

// Multiples of 3
console.log("Print Multiples of 3");

var threeMultiple = 3;

while(threeMultiple <= 30){
	if(threeMultiple % 3 ===0){
		console.log(threeMultiple);
	}
	threeMultiple++;
}

// Even Numbers
console.log("Print Even Numbers");


var even = 2;

while(even <= 46){
	if(even % 2 === 0){
		console.log(even);
	}
	even++;
}


// -10 to 19
console.log("Print from -10 to 19");


var negative = -10;

while(negative <= 19){
	console.log(negative);
	negative++;
}

// Print odd numbers between 300 and 333

console.log("Print odd nunbers between 300 and 333");

var threeHundred = 300;

while(threeHundred <= 333){
	if(threeHundred % 2 !== 0){
		console.log(threeHundred);
	}
	threeHundred++;
}

// Print numbers divisible by 3 and 5 that are between 5 and 50
console.log("Numbers that are divisible by three and five that are between 5 and 50");

var fiveMultiple = 5;

while(fiveMultiple <= 50){
	if(fiveMultiple % 3 === 0 && fiveMultiple % 5 === 0){
		console.log(fiveMultiple);
	}
	fiveMultiple++;
}