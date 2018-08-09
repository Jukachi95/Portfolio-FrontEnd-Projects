let val;


// Declare Val

val = String(50);

// Converting number to string
console.log(val);
console.log(val.length);
console.log(typeof val);

// Converting Boolean to String
val = String(true);

// console.log(val);
// console.log(val.length);
// console.log(typeof val

// val = parseInt('500');
// val = parseFloat('1221.2');

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(1));

// const val1 = (3).toString();
// const val2 = 7;

// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// const val3 = (8).toString();
// const val4 = 9;

// const sum = Number(val3 + val4);

// console.log(sum);
// console.log(typeof sum);

// const val3 = (3).toString();

val = "Joel ";
val += "Okoro"

console.log(val); 


// let firstName = "Joel";
// let lastName  ="Okoro";
// let age = 23;
// let city = "Birmingham";
// let job = "Developer";

// let personal =  ` 
// <p> Name: ${firstName} </p>
// <p> Job: ${job} </p>
// <p> Age: ${age} </p>
// <p> City: ${city} </p>

// `


// document.body.innerHTML = personal;

// let val8 = parseInt('800');


// console.log(val8);
// console.log(val8.toFixed());
// console.log(typeof val8);

// const newName = "JOEL";

// let nameFor = newName.charAt(newName.length-1);

// console.log(nameFor);

// let name = "Joel";
// let age = 23;
// let city = "Birmingham";
// let occupation = "Developer";

// let persona = `
// <ul>
// <li> Name: ${name}  </li>
// <li>  Job: ${occupation}</li>

// </ul>

// `

// document.body.innerHTML = persona;

// let month = new Date('4-29-2018');

// let newMonth = month.getMonth();
// newMonth = month.getFullYear();


// console.log(newMonth);

// const goalMinute = 4;

// switch(goalMinute){

// 		case 4:
// 		console.log("Goal");
// 		break;

// 		case 5:
// 		console.log("Own Goal");
// 		break;
// }

// let day;

// switch(new Date().getDay()){
// 	case 0:
// 	day = "Sunday";
// 	break;

// 	case 1:
// 	day = "Monday";
// 	break;

// 	case 2:
// 	day = "Tuesday";
// 	break;

// 	case 3:
// 	day = "Wednesday";
// 	break;

// 	case 4:
// 	day = "Thursday";
// 	break;

// 	case 5:
// 	day = "Friday";
// 	break;

// 	case 6:
// 	day = "Saturday";
// 	break;
// }

// console.log(`Today is ${day}`);


// let day;

// switch(new Date().getDay()){
// 	case 0:
// 	day = "Sunday"
// 	break;

// 	case 1:
// 	day = "Monday"
// 	break;

// 	case 2:
// 	day = "Tuesday"
// 	break;

// 	case 3:
// 	day = "Wednesday"
// 	break;

// 	case 4:
// 	day = "Thursday"
// 	break;

// 	case 5:
// 	day = "Friday"
// 	break;

// 	case 6:
// 	day = "Saturday"
// 	break;

// }

// console.log(`Today is ${day}`)


function newName (firstName = 'Joel', lastName = 'Okoro'){

	return "Hello my name is" + " " + firstName + " " + lastName;

}

console.log(newName())


// const todo = {
// 	add: function(){
// 		console.log("Add ToDo");
// 	}
// 

// let busoUser = ["Luffy", "Zoro", "Fujitora", "Doflamingo"];

// for(let i =0; i < busoUser.length; i++){
// 	console.log(busoUser[i] + " is the best Haki user");
// }


// for(let i = 0; i < 10; i++){
// 	if(i % 2 == 0){
// 		console.log(i + " is an even number");
// 	}
//   		console.log(i)
// }

let day;

switch(new Date().getDay()){

	case 0:
	day = "Sunday";
	break;

	case 1:
	day = "Monday";
	break;

	case 2:
	day = "Monday";
	break;

	case 3:
	day = "Wednesday";
	break


	case 4:
	day = "Thursday";
	break;



	case 5:
	day = "Friday";
	break


	case 6:
	day = "Saturday";
	break;
}

console.log(`Today is ${day}`); 


// var fighter = ["Goku", "Vegeta", "Jiren"];

// fighter.forEach(function(fight){
// 	console.log(fight);
// })

// var supernova = ["Luffy", "Zoro", "Hawkins"];

// supernova.forEach(function(sai){
// 	console.log(sai);  
// })

// var supernova = ["Luffy", "Zoro", "Law", "Kidd", "Hawkins"];

// supernova.forEach(function(worstGen){
// 	console.log(worstGen);
// })

// let supernova = {

// 				StrawHat: [19, "1.5 Billion", "Captain", "StrawHat Pirates"],

// 				PirateHunter: [21, "320 Million", "Swordsman/Vice-Captain", "StrawHat Pirates"],

// 				Surgeon: [26, "500 Million", "Captain", "Heart Pirates"]


// }

// let strongestSupernova = supernova.StrawHat;


// console.log(strongestSupernova);


// let crews = {

// 	SH: ["Luffy", "Zoro", "Sanji"],

// 	HP: ["Law", "Bepo"],

// 	BM: ["Katakuri", "Cracker", "Oven"]
// }

// console.log(crews.SH);

// let newPage;

// newPage = document;
// newPage = document.all
// newPage = document.all.length;
// newPage = document.URL;

// console.log(newPage);

// console.log(document.getElementById("mainHeader"));
// console.log(document.getElementById("mainParagraph"));


// let newPage = document.all.length;

// console.log(document.getElementById("mainParagraph").id)

// let newPage = document.all;

// console.log(document.getElementById("mainHeader").id)

// let newDay;

// switch(new Date().getDay()){

// 	case 0:
// 	newDay= "Sunday"
// 	break;

// 	case 1:
// 	newDay= "Monday";
// 	break;

// 	case 2:
// 	newDay = "Tuesday";
// 	break;
// }

// console.log(`Today is ${newDay}`);

// for(let i = 0; i < 10; i++){
// 	if(i == 2){
// 		console.log("I am the number " + i);
// 		break;
// 	}
// 	console.log(i)
// }

// const listName = document.getElementsByClassName("class-test");

// console.log(listName)

// listName[0].style.color = "red";
// listName[1].style.color = "blue";

// const newListItems = document.querySelector('ul').getElementsByClassName('class-test');
// console.log(newListItems);

// const items = document.getElementsByClassName("class-test");

// items[1].style.color = "red"

// console.log(items);


// let newItems = document.querySelector('ul').getElementsByClassName('class-test');
// console.log(newItems)

// const lis = document.getElementsByTagName('li');

// console.log(lis[5])

// let items = document.querySelectorAll("li");

// console.log(items)

// items.forEach(function(item, index){
// 	console.log(item);
// 	item.textContent = `${index}: Hello`
// })

// var liOdd= document.querySelectorAll("li:nth-child(odd)");
// var liEven = document.querySelectorAll("li:nth-child(even");

// liOdd.forEach(function(li, item){
// 	li.style.background = '#ccc'
// })

// liEven.forEach(function(li, item){
// 	li.style.background = "#f4f4f4"
// })

const items = document.getElementsByClassName("class-test");
console.log(items)


// const person = {
// 	age: 30
// 	newAge: function(){
// 		return 2018 - this.age;
// 	}
	
// }

// let newBirthYear = person.age;
// console.log(newBirthYear)

// let val14 = person.newAge();
// console.log(val14);