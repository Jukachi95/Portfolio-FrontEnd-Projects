console.log("While Loop that prints all odd numbers under 10")

var counter = 0;

while(counter <= 10){
	if(counter % 2 !== 0){
		console.log(counter);
	}
	counter++;
}

console.log("While Loop that only prints multiples of 4 in the console log *starting from 4*");

var counter = 4;

while(counter <= 48){
	if(counter % 4 === 0){
		console.log(counter)
	}
	counter++;
}

console.log("While Loop that only prints multiples of 3 in the console log *starting from 3*");

var counter = 3;

while(counter <= 38){
	if(counter % 3 === 0){
		console.log(counter);
	}
	counter++;
}

console.log("A while loop that prints only even numbers");

var counter = 0;

while(counter <= 44){
	if(counter % 2 === 0){
		console.log(counter);
	}
	counter++;
}



console.log("A while loop that prints numbers divisible by 3 & 5 that are under 50 ");

var counter = 3;

while(counter <= 50){
	if(counter % 3 === 0 && counter % 5 === 0){
		console.log(counter)
	}
	counter++;
}