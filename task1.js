/* Task 1 */
function isPalindrom(str){
	let i;
	str = str.replace(/\W/g,"").toUpperCase();
	for (i = 0; i < str.length; i++) {
		if(str[i]!==str[str.length-i-1]){
			return 'NO';
		}
	}
	return 'YES';
}
process.stdout.write(isPalindrom(process.argv[2]));
