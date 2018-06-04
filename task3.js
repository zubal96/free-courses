/* Task 3 */
function sumTime(t1,t2){
	var time = new Date(0,0,0,0,0,+t1 + +t2);
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	var str ="";

	switch(hours){
		case 0: break; 
		case 1: str+=hours+" час"; break; 
		case 2: case 3: case 4: str+=hours+" часа"; break; 
		default: str+=hours+" часов";
	}

	if(minutes!==0){
		if(str!="") 
			str+=" ";
		if(minutes >= 11 && minutes <= 14)
			str+=minutes+" минут";
		else
			switch(minutes%10){
				case 1: str+=minutes+" минута"; break; 
				case 2: case 3: case 4: str+= minutes+" минуты"; break; 
				default: str+=minutes+" минут";
			}
	}

	if(seconds!==0){
		if(str!="") 
			str+=" ";
		if(seconds >= 11 && seconds <= 14)
			str+=seconds+" секунд";
		else
			switch(seconds%10){
				case 1: str+=seconds+" секунда"; break; 
				case 2: case 3: case 4: str+=seconds+" секунды"; break; 
				default: str+=seconds+" секунд";
			}
	}
	return str;
}	
process.stdout.write(sumTime(process.argv[2],process.argv[3]));
