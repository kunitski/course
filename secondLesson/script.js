
// Напишите функцию mid(a,b), которая возвращает среднее значение из чисел a,b. Ex: mid(5,15) // 10

function mid(a,b){
 	return (a+b)/2;
}
console.log(mid(5,15));


// Напишите функцию pow(x,n), которая возвращает x в степени n. Ex: pow(2,3) // 8 

function pow(x,n){
 	let a = x;
	for(i = 1; i < n; i++){
    	a*=x;
	}
	return a;
}
console.log(pow(2,3));


// Перепишите код через конструкцию switch и на стандарт ES6

// function questionFunc() {
// 	var a = +prompt('a?', '');

// 	if (a == 0) {
//   		alert( 0 );
// 	}
// 	if (a == 1) {
//   		alert( 1 );
// 	}
// 	if (a == 2 || a == 3) {
//   		alert( '2,3' );
// 	}
// }

var questionFunc=()=>{
	let a = +prompt('a?', '');
    switch(a){
      case 0:
        alert("0");
        break;
      case 1:
        alert("1");
        break;
      case 2:
      case 3:
        alert("2,3");
        break;
    }
}
questionFunc();


// 4. Напишите 3 функции (loopWhile(2,10), loopDoWhile(2,10), loopFor(2,10)),
//  каждая из которых принимает 2 аргумента: начальное значение и конечное. 
// Задача: каждая функция выводит в консоль нечетные значения в указанном диапазоне 
// (каждая функция делается через определенный цикл, соответствующий названию) 


function loopWhile(a,b){
	var i = a;
	while(i < b){
	  	if (i % 2) {
	    	console.log (i);
	    }   
    i++;
  } 
}
loopWhile(2,10);


function loopDoWhile(a,b){
	var i = a;
	do{
	  	if (i % 2) {
	    	console.log (i);
	    }
    i++;
  }
	while(i < b);
}
loopDoWhile(2,10);


function loopFor(a,b){
	for(i = a; i < b; i++){
	  	if (i % 2) {
	    	console.log(i);
	    }
	}
}
loopFor(2,10);