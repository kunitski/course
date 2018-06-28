
// Написать функцию tryToParseJSON(arr), которая принимает массив arr 
// и пробует преобразовать в JSON каждый его элемент. 
// Функция должна возвращать массив, значениями которого могут быть либо ошибки, 
// полученные во время этапа преобразования, либо преобразованный в JSON элемент.
// P.S. Вызвать функцию через 5 секунд 

// const array = [[1,2,3], true, null, 123, {"a": "b","c": "d","e": "f"}];
// tryToParseJSON(array); //  ["[1,2,3]", "true", "null", "123",
// "{"a":"b","c":"d","e":"f"}", TypeError: Converting circular structure to JSON]


const array = [[1,2,3], true, null, 123, {"a": "b","c": "d","e": "f"}, this];
arrJSON = [];
function tryToParseJSON(arr){
	for(i=0; i<arr.length; i++){
		try{
			arrJSON.push(JSON.stringify(arr[i]));
		}
		catch(error){
			arrJSON.push(error.name + ":" + error.message);			
		}		
	}
	return arrJSON;
}
setTimeout(function(){tryToParseJSON(array);}, 5000);