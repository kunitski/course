
// // Напишите функцию isInArray(arr, el), которая проверяет,
// //  есть ли в массиве arr элемент el. Если есть возвращает true, 
// //  если нет false. 
// // Ex: isInArray(`[1, 2, 3 , `4`, `hello`]`,`hello`) // true
// // Ex: isInArray(`[1, 2, 3 , `4`, `hello`]`, 4) // false (т.к. число)

function isInArray(arr,el){
	if (arr.indexOf(el) !== -1){return true}
	else{return false}
};

isInArray([1, 2, 3 , `4`, `hello`],`hello`);
isInArray([1, 2, 3 , `4`, `hello`], 4);



// Напишите функцию modifyArr(arr, el, newEl), которая проверяет,
//  есть ли в массиве arr элемент(ы) el. Если есть,
//   заменяет элемент(ы) el на newEl и возвращает новый массив. 
//   Если нет возвращает строку “element el not found in array arr”. 
// Ex: modifyArr([1,2,3,4,5], 3, `hello`) // [1,2,`hello`, 4, 5]
// Ex: modifyArr([1,2,3,4,5,3], 3, `hello`) // [1,2,`hello`, 4, 5, `hello`]
// Ex: modifyArr([1,2,3,4,5], 6, `hello`) // “element 6 not found in array [1,2,3,4,5]”


function modifyArr(arr,el,newEl){
	if(arr.indexOf(el) != -1){		
		for (i= 0; i<arr.length; i++){
			if(arr.indexOf(el) != -1){
				arr.splice(arr.indexOf(el), 1, newEl);
			}
		} return arr;		
	}
	else{
		return "element " + el + " not found in array [1,2,3,4,5]";
	}	
};
modifyArr([3,1,2,3,4,5], 3, `hello`);
modifyArr([1,2,3,4,5,3,4,5,6,4,3,4,5], 3, `hello`);
modifyArr([1,2,3,4,5],6, `hello`);



// Напишите функцию transformString(str, el, newEl), которая проверяет
// , есть ли в строке str комбинация символов el 
// (регистр комбинации не учитывается). 
// Если находит совпадение заменяет в строке el на newEl 
// и возвращает модифицированную строку, 
// в противном случае возвращает строку “element el not found in string str”.
		
// 	Ex: transformString(`my naMe is Alex`,`name`, `coolName`) // `my coolName is Alex`
// 	Ex: transformString(`my sUrNaMe is Ivanov`,`SURNAMES`) // `element SURNAMES not found in string my sUrNaMe is Ivanov`


function transformString(str,el,newEl){
 	if (str.toUpperCase().indexOf(el.toUpperCase()) != -1){
		return str.replace(str.substr(str.toUpperCase().indexOf(el.toUpperCase()), el.length),newEl);
	}
	else{
		return `element ` + el + ` not found in string ` + str;
	}
}

transformString(`my naMe is Alex`,`name`, `coolName`);
transformString(`my sUrNaMe is Ivanov`,`SURNAMES`);
