function firstNonRepeatedChar(str) {
 // Write your code here
	let map=new Map();
	for(let i=0;i<str.length;i++){
		if(!map.has(str[i])){
			map.set(str[i],0);
		}
		map.set(str[i],map.get(str[i])+1);
	}
	
	for(let [key,val] of map){
		if(val===1){
			return key;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));


