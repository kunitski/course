// Реализовать функции:
// Напишите функцию 
// const middleAgeBySex = (infoArray, sex) => {
//  // your code
// }
// Которая принимает на вход массив объектов infoArray со значениями 
// информации о людях (name, sex, age) и возвращает средний возраст 
// либо всех мужчин либо всех женщин, основываясь на втором параметре sex.
// ПРИМЕР:

// middleAgeBySex(infoAboutPersons, `M`); // 26
// middleAgeBySex(infoAboutPersons, `W`); // 20

const infoAboutPersons  = [{
			name: `Ivan`,
			sex: `M`,
			age: 21
		},
		{
			name: `Olga`,
			sex: `W`,
			age: 19
			},
		{
			name: `Oleg`,
			sex: `M`,
			age: 27
		},
		{
			name: `Ann`,
			sex: `W`,
			age: 21
		},
		{
			name: `Alex`,
			sex: `M`,
			age: 30
		}
];

const middleAgeBySex = (infoArray, sex) => {
	let sumAge = 0;
	let count = 0;
	for (var i = 0; i < infoArray.length; i++){
		if(infoArray[i].sex == sex){
			sumAge = sumAge + parseInt(infoArray[i].age);
			count++;
		}
	}
	return sumAge/count;
}
middleAgeBySex(infoAboutPersons,`M`);
middleAgeBySex(infoAboutPersons,`W`);