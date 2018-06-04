/* Task 2 */
function HowOldNewYear(day,tMonth,year){
	var month;
	switch(tMonth.toLowerCase()){
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
	var Timezone = - new Date().getTimezoneOffset()/60;
	var getDate = new Date(year,month,day,Timezone);
	var nextDate = new Date(year,12,1,Timezone);
	var msPerDay = 24*60*60*1000;
	var daysLeft = Math.ceil((nextDate.getTime()-getDate.getTime())/msPerDay)-1;
	return ''+daysLeft;
}
process.stdout.write(HowOldNewYear(process.argv[2],process.argv[3],process.argv[4]));
