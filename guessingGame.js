var guess = 3;


switch(guess){
	case 7:
	guess = "You got it right";
	break;

	case 6:
	guess = "Ohhh, so close.";

	case 8:
	guess = "You almost had it";
	break;


	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	guess = "Too Low, try again";
	break;

	default:
	guess = "Too high, try again";
	break;
}

console.log(guess);