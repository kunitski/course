
// Напишите функцию count(str,l), 
// которая возвращает количество символов l в строке str.
// Ex: count(`we are future developers`,`e`) // 6 

function count(str,I){
 let rez = 0;
 let i = str.indexOf(I);
 
 while (i !== -1){
	rez++;
	i = str.indexOf(I,i+1);
 }
 return rez;
}

console.log(count(`we are future developers`,`e`));


// Напишите функцию powX(x,n), которая возвращает x в степени n. 
// Числа x и n должны быть десятичными, и прежде чем
//  произвести возведение в степень, нужно привести их к ближайшему целому. 
// Ex: powX(2.5,3.3) ---> pow(3,3) ---> //27 


function powX(x,n){
 let roundX = Math.round(x);
 let roundN = Math.round(n);
 let rez = roundX;

 for(i = 1; i < roundN; i++){
    rez*=roundX;
 }
 return rez;
}

console.log(powX(2.5,3.3));


// Напишите функцию checkingComb(str, comb), которая проверяет,
//  есть ли в строке str комбинация символов comb 
//  (регистр комбинации не учитывается). Если находит совпадение
//  возвращает true, в противном случае - false.	
// 	Ex: checkingComb(`my naMe is Alex`,`name`) // true
// 	Ex: checkingComb(`my sUrNaMe is Ivanov`,`SURNAME`) // true
// 	Ex: checkingComb(`my sUrNaMe is Ivanov`,`SIRNAMES`) // false


function checkingComb(str,comb){
 let uppComb = comb.toUpperCase();
 let uppStr = str.toUpperCase().indexOf(uppComb);
		
 if (uppStr !== -1){
	return true;
 }else{
	return false;
 }
}

console.log(checkingComb(`my naMe is Alex`,`name`));
console.log(checkingComb(`my sUrNaMe is Ivanov`,`SURNAME`));
console.log(checkingComb(`my sUrNaMe is Ivanov`,`SIRNAMES`));