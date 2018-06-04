/* Task 3 */
let t1 = process.argv[2];
let t2 = process.argv[3];
let time = new Date(0,0,0,0,0,+t1 + +t2);
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let str ="";

switch(hours){
	case 0: break; 
	case 1: str+=hours+" час"; break; 
	case 2: case 3: case 4: str+=hours+" часа"; break; 
	default: str+=hours+" часов";
}

if(minutes!==0){
	if(str!="") str+=" ";
	switch(minutes%10){
		case 1: str+=minutes+" минута"; break; 
		case 2: case 3: case 4: str+= minutes+" минуты"; break; 
		default: str+=minutes+" минут";
	}
	if(minutes >= 11 && minutes <= 14)
		str+=minutes+" минут";
}

if(seconds!==0){
	if(str!="") str+=" ";
	switch(seconds%10){
		case 1: str+=seconds+" секунда"; break; 
		case 2: case 3: case 4: str+=seconds+" секунды"; break; 
		default: str+=seconds+" секунд";
	}
	if(seconds >= 11 && seconds <= 14)
		str+=seconds+" секунд";
}
console.log(str);
