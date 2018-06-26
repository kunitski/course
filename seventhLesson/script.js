// Реализовать функции:
// Написать функцию mul(value), 
// которая будет работать следующим образом:
// mul(2)(3)(4)(5) //120

function mul(x) {
  let currentSum = x;
  function f(b) {
    currentSum *= b;
    return f;
  }
  f.toString = function() {
    return currentSum;
  };
  return f;
}
(mul(2)(3)(4)(5));


// Написать функцию sumStringArgs(str1, str2, str3...)
// Которой можно передать неограниченное количество строк,
// которые будут преобразовываться в числа и суммироваться.
// Если преобразовать в число не получилось, 
// добавляем строки в массив. 
// Функция должна вернуть JSON объект с двумя свойствами: 
// count (типа number) в котором будет сумма 
// и errStrings (типа array) в котором будут строки, 
// которые не смогли преобразовать к числам.


function sumStringArgs(){
	let result = {};
	let counte = 0;
	result.errStrings = [];
	for (i = 0; i < arguments.length; i++) {
		argItem = arguments[i];
		number = parseInt(argItem);
		if (number) {
			counte += number;
			result.count = counte;
		}
		else{
			result.errStrings.push(argItem);
		}
	}
	return JSON.stringify(result, "", 2);
}
sumStringArgs(`23dfdsf`, `45`, `ddfgfg54`); 
sumStringArgs(`dfgfdgfd`, `3`, `dg454`, `4dfsdf`);