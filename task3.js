/* Task 3 */
let t1 = process.argv[2];
let t2 = process.argv[3];
let time = new Date(0,0,0,0,0,+t1 + +t2);
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

switch(hours){
	case 0: hoursText=""; hours=""; break; 
	case 1: hoursText=" час "; break; 
	case 2:case 3:case 4: hoursText=" часа "; break; 
	default:hoursText=" часов ";
}

switch(minutes%10){
	case 0: minutesText=""; minutes=""; break; 
	case 1: minutesText=" минута "; break; 
	case 2:case 3:case 4: minutesText=" минуты "; break; 
	default:minutesText=" минут ";
}
if(minutes >= 11 && minutes <= 14)
	minutesText=" минут ";

switch(seconds%10){
	case 0: secondsText=""; seconds=""; break; 
	case 1: secondsText=" секунда "; break; 
	case 2:case 3:case 4: secondsText=" секунды "; break; 
	default:secondsText=" секунд ";
}
if(seconds >= 11 && seconds <= 14)
	secondsText=" секунд ";

let str = hours + hoursText +minutes + minutesText + seconds + secondsText;
console.log(str);
