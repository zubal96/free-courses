/* Task 2 */
let day = process.argv[2];
let month;
switch(process.argv[3].toLowerCase()){
	case 'января': month = 0; break; 
	case 'февраля': month = 1; break; 
	case 'марта': month = 2; break; 
	case 'апреля': month = 3; break; 
	case 'мая': month = 4; break; 
	case 'июня': month = 5; break; 
	case 'июля': month = 6; break; 
	case 'августа': month = 7; break; 
	case 'сентября': month = 8; break; 
	case 'октября': month = 9; break; 
	case 'ноября': month = 10; break; 
	case 'декабря': month = 11; break; 
}
let year = process.argv[4];
let Timezone = - new Date().getTimezoneOffset()/60;
let getDate = new Date(year,month,day,Timezone);
let nextDate = new Date(year,12,1,Timezone);
let msPerDay = 24*60*60*1000;
let daysLeft = Math.ceil((nextDate.getTime()-getDate.getTime())/msPerDay)-1;
process.stdout.write(daysLeft);
